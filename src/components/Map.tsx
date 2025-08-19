// Map.tsx
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    google?: any;
    __GMAPS_API_KEY?: string;
    __GMAPS_MAP_ID?: string;
  }
}

/**
 * Load Google Maps JS API asynchronously.
 */
function loadGoogleMaps(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) return resolve();

    const existing = document.getElementById("gmaps-sdk") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Failed to load Google Maps JS")));
      return;
    }

    const key = window.__GMAPS_API_KEY;
    if (!key) {
      reject(
        new Error("Missing Google Maps API key. Ensure the server injects window.__GMAPS_API_KEY.")
      );
      return;
    }

    const script = document.createElement("script");
    script.id = "gmaps-sdk";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      key
    )}&v=weekly&libraries=marker`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps JS"));
    document.head.appendChild(script);
  });
}

/**
 * React component for rendering Google Map with AdvancedMarkerElement
 */
export const Map: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        await loadGoogleMaps();
      } catch (e) {
        console.error("[GoogleMaps] Script load error:", e);
        return;
      }
      if (cancelled || !ref.current) return;

      try {
        // Modern importLibrary API
        const { Map } = await window.google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

        const center = { lat: 37.3316850890998, lng: -122.030067374026 };

        mapRef.current = new Map(ref.current, {
          center,
          zoom: 12,
          disableDefaultUI: false,
          mapId: window.__GMAPS_MAP_ID ?? undefined,
        });

        new AdvancedMarkerElement({
          map: mapRef.current,
          position: center,
          title: "Our Location",
        });

        console.debug("[GoogleMaps] Map initialized successfully.");
      } catch (e) {
        console.error("[GoogleMaps] init error:", e);
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  return <div ref={ref} className="w-full h-[600px] rounded-xl overflow-hidden bg-black/20" />;
};

export default Map;
