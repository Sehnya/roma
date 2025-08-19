import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Directions from "./pages/Directions";
import Reservations from "./pages/Reservations";
import {Menu} from "./pages/Menu.tsx";



const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/directions", element: <Directions /> },
  { path: "/reservations", element: <Reservations /> },
  { path: "/menu", element: <Menu /> },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
