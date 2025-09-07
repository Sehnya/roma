# Roma - Luxury Fine Dining Restaurant Website

Roma is a sophisticated, mobile-responsive restaurant website built with modern web technologies and designed for luxury fine dining establishments. The project showcases elegant design, smooth animations, and seamless user experience across all devices.

## 🌟 Features

- **Luxury Design**: Elegant, sophisticated UI with premium aesthetics
- **Mobile-First Responsive**: Optimized for all screen sizes and devices
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS
- **Interactive Components**: Smooth animations and engaging user interactions
- **Google Maps Integration**: Interactive location mapping
- **Reservation System**: Mock reservation functionality with form validation
- **Events Management**: Dynamic events display with RSVP functionality
- **Menu Showcase**: Beautiful menu presentation with high-quality imagery
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Bun (ultra-fast JavaScript runtime)
- **Styling**: Tailwind CSS 4.x
- **Routing**: React Router DOM
- **Deployment**: Vercel (optimized configuration)
- **Maps**: Google Maps JavaScript API
- **Animations**: Custom CSS animations and transitions

## 📱 Mobile Responsiveness

The website is fully responsive with:

- Adaptive layouts for mobile, tablet, and desktop
- Touch-friendly navigation and interactions
- Optimized images and performance for mobile devices
- Smooth scrolling and gesture support

## 🎨 Design Philosophy

Roma embodies luxury fine dining through:

- **Elegant Typography**: Serif fonts for sophistication
- **Rich Color Palette**: Deep blacks, warm golds, and subtle whites
- **Premium Imagery**: High-quality food and restaurant photography
- **Subtle Animations**: Smooth transitions that enhance user experience
- **Decorative Elements**: Tasteful botanical graphics and borders

## 🛠️ Installation & Setup

### Prerequisites

- Bun (latest version)
- Node.js 18+ (for compatibility)
- Google Maps API key

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd roma-restaurant
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Add your Google Maps API key to `.env`:

   ```
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
   VITE_GOOGLE_MAPS_MAP_ID=your_map_id_here
   ```

4. **Start development server**

   ```bash
   bun run dev
   ```

5. **Build CSS (in another terminal)**

   ```bash
   bun run css:dev
   ```

6. **Visit the application**
   Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
bun run build
bun run css:build
```

## 🚀 Deployment on Vercel

The project is optimized for Vercel deployment:

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   - `VITE_GOOGLE_MAPS_API_KEY`
   - `VITE_GOOGLE_MAPS_MAP_ID`
3. **Deploy** - Vercel will automatically use the `vercel.json` configuration

### Vercel Configuration

The project includes a `vercel.json` file with:

- Custom build commands for Bun
- SPA routing configuration
- Static asset caching headers
- Optimized output directory

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── NavBar.tsx      # Navigation component
│   ├── Map.tsx         # Google Maps integration
│   ├── Footer.tsx      # Footer component
│   └── ...
├── pages/              # Route components
│   ├── Menu.tsx        # Menu showcase
│   ├── Reservations.tsx # Reservation form
│   ├── Events.tsx      # Events listing
│   └── Directions.tsx  # Location & directions
├── services/           # API and data services
│   └── mockApi.ts      # Mock backend services
├── App.tsx             # Main application component
├── frontend.tsx        # Application entry point
└── index.html          # HTML template

static/
├── images/             # Restaurant imagery and assets
├── css/                # Tailwind CSS files
└── assets/             # Built JavaScript assets
```

## 🎯 Key Pages

- **Home**: Hero section, about, featured events, location
- **Menu**: Curated dishes with descriptions and pricing
- **Reservations**: Interactive booking form with validation
- **Events**: Dynamic events with RSVP functionality
- **Directions**: Interactive map with detailed location info

## 🔧 Customization

### Branding

- Update logo files in `static/images/`
- Modify color scheme in Tailwind configuration
- Customize fonts in `src/index.html`

### Content

- Edit restaurant information in components
- Update menu items in `src/pages/Menu.tsx`
- Modify events in `src/services/mockApi.ts`

### Styling

- Tailwind classes for rapid styling changes
- Custom CSS in `static/css/tailwind.css`
- Component-specific styles in individual files

## 🌐 Google Maps Setup

1. **Get API Key**: Visit [Google Cloud Console](https://console.cloud.google.com/)
2. **Enable APIs**: Maps JavaScript API, Places API
3. **Create Map ID**: In Google Maps Platform
4. **Set Restrictions**: Limit API key usage for security

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Static assets cached for 1 year

## 🔒 Security

- Environment variables for sensitive data
- API key restrictions
- HTTPS enforcement
- Content Security Policy headers

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:

- Email: support@roma-restaurant.com
- GitHub Issues: [Create an issue](../../issues)

---

**Roma** - Where culinary mastery meets digital excellence. 🍽️✨
