# Roma Restaurant - Deployment Guide

This guide will help you deploy the Roma restaurant website to Vercel.

## 🚀 Quick Deployment to Vercel

### Prerequisites

- GitHub account
- Vercel account (free tier available)
- Google Maps API key

### Step 1: Prepare Your Repository

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - Roma restaurant website"
   git push origin main
   ```

### Step 2: Deploy to Vercel

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your Roma restaurant repository

2. **Configure Build Settings**
   Vercel will automatically detect the `vercel.json` configuration, but verify:
   - **Build Command**: `bun run css:build && bun run build`
   - **Output Directory**: `dist`
   - **Install Command**: `bun install`

3. **Set Environment Variables**
   In your Vercel project dashboard, go to Settings → Environment Variables:

   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   VITE_GOOGLE_MAPS_MAP_ID=your_google_maps_map_id_here
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. **Add Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `roma-restaurant.com`)
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - Your site will be accessible via HTTPS

## 🗝️ Google Maps API Setup

### Get API Key

1. **Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Places API (optional, for enhanced features)

2. **Create API Key**
   - Go to Credentials → Create Credentials → API Key
   - Copy the API key

3. **Create Map ID**
   - Go to [Google Maps Platform](https://console.cloud.google.com/google/maps-apis/studio/maps)
   - Create a new Map ID
   - Configure map style (optional)

### Secure Your API Key

1. **Set Restrictions**
   - In Google Cloud Console, edit your API key
   - Add HTTP referrer restrictions:
     ```
     https://your-domain.com/*
     https://your-project-name.vercel.app/*
     ```

2. **Environment Variables**
   - Never commit API keys to your repository
   - Always use environment variables in production

## 🔧 Local Development

### Setup

```bash
# Install dependencies
bun install

# Copy environment variables
cp .env.example .env

# Add your API keys to .env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
VITE_GOOGLE_MAPS_MAP_ID=your_map_id_here

# Start development server
bun run dev

# In another terminal, start CSS watcher
bun run css:dev
```

### Development URLs

- **Local**: http://localhost:3000
- **Network**: Available on your local network

## 📊 Performance Optimization

### Vercel Optimizations

- **Edge Functions**: Automatic edge deployment
- **Image Optimization**: Built-in image optimization
- **Caching**: Static assets cached globally
- **Compression**: Automatic Gzip/Brotli compression

### Build Optimizations

- **Code Splitting**: Automatic with Bun
- **Tree Shaking**: Dead code elimination
- **Minification**: CSS and JS minification
- **Source Maps**: Available for debugging

## 🔍 Monitoring & Analytics

### Vercel Analytics

- Enable in Vercel dashboard
- Track page views, performance metrics
- Real user monitoring

### Performance Monitoring

- **Lighthouse**: Built into Chrome DevTools
- **Web Vitals**: Core web vitals tracking
- **Speed Index**: Page load performance

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**

   ```bash
   # Clear cache and rebuild
   rm -rf node_modules dist
   bun install
   bun run css:build && bun run build
   ```

2. **CSS Not Loading**

   ```bash
   # Rebuild CSS
   bun run css:build
   ```

3. **Tailwind CSS Command Not Found**

   ```bash
   # Ensure Tailwind CSS is installed
   bun add -D tailwindcss @tailwindcss/cli
   # Then rebuild
   bun run css:build
   ```

4. **Maps Not Loading**
   - Check API key in environment variables
   - Verify API restrictions
   - Check browser console for errors

5. **404 Errors on Refresh**
   - Ensure `vercel.json` has correct rewrites
   - Check SPA routing configuration

### Debug Mode

```bash
# Run with debug output
DEBUG=* bun run dev
```

## 📱 Mobile Testing

### Test on Multiple Devices

- **Chrome DevTools**: Device simulation
- **BrowserStack**: Real device testing
- **Physical Devices**: iOS and Android testing

### Performance on Mobile

- **3G Throttling**: Test slow connections
- **Touch Interactions**: Ensure touch-friendly
- **Viewport**: Test different screen sizes

## 🔒 Security Checklist

- ✅ API keys in environment variables
- ✅ HTTPS enforced
- ✅ Content Security Policy headers
- ✅ API key restrictions set
- ✅ No sensitive data in client code

## 📈 SEO Optimization

### Meta Tags

- Title tags optimized
- Meta descriptions added
- Open Graph tags included
- Schema markup for restaurant

### Performance

- Core Web Vitals optimized
- Image optimization enabled
- Lazy loading implemented
- Critical CSS inlined

## 🎯 Next Steps

1. **Custom Domain**: Set up your restaurant's domain
2. **Analytics**: Add Google Analytics or similar
3. **CMS Integration**: Consider headless CMS for content
4. **Reservation System**: Integrate with real booking system
5. **Payment Processing**: Add online ordering capabilities

---

**Need Help?**

- Check the [Vercel Documentation](https://vercel.com/docs)
- Review [Google Maps API Documentation](https://developers.google.com/maps/documentation)
- Open an issue in the repository for project-specific questions
