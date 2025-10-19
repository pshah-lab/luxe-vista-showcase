# 🏰 Luxe Vista Showcase

A modern, luxury property showcase website built with React, TypeScript, and Tailwind CSS. This elegant web application showcases premium 5 BHK bungalows and luxury properties with stunning visuals, smooth animations, and a sophisticated user experience.

## ✨ Features

- **🎨 Luxury Design**: Custom luxury color palette with gold, burgundy, and charcoal themes
- **📱 Responsive Layout**: Fully responsive design optimized for all devices
- **🎬 Smooth Animations**: GSAP-powered animations and transitions
- **🖼️ Interactive Gallery**: High-quality image gallery with lightbox functionality
- **⚡ Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **🎯 Modern UI Components**: Built with Radix UI and shadcn/ui components
- **🔍 SEO Ready**: Optimized for search engines with proper meta tags
- **🌙 Dark Mode Support**: Built-in dark mode capabilities
- **📊 Tech Stack Showcase**: Interactive technology marquee display

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animations
- **React Router DOM** - Client-side routing
- **React Query** - Data fetching and caching

### UI Components
- **Radix UI** - Unstyled, accessible UI primitives
- **shadcn/ui** - Beautiful, customizable components
- **Lucide React** - Beautiful & consistent icon toolkit
- **Embla Carousel** - Lightweight carousel library
- **Swiper** - Modern touch slider

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS post-processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/luxe-vista-showcase.git
   cd luxe-vista-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

## 📁 Project Structure

```
luxe-vista-showcase/
├── public/
│   └── assets/           # High-quality property images
├── src/
│   ├── components/       # Reusable React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Index.tsx
│   │   ├── Gallery.tsx
│   │   └── NotFound.tsx
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── main.tsx         # Application entry point
├── tailwind.config.ts   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

## 🎨 Design System

### Color Palette
- **Luxury Gold**: `hsl(var(--luxury-gold))`
- **Luxury Burgundy**: `hsl(var(--luxury-burgundy))`
- **Luxury Cream**: `hsl(var(--luxury-cream))`
- **Luxury Charcoal**: `hsl(var(--luxury-charcoal))`
- **Luxury Amber**: `hsl(var(--luxury-amber))`
- **Luxury Bronze**: `hsl(var(--luxury-bronze))`
- **Luxury Silver**: `hsl(var(--luxury-silver))`

### Typography
- **Primary Font**: Inter (sans-serif)
- **Serif Font**: Playfair Display
- **Display Font**: Montserrat

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The project is configured for easy deployment on Vercel:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

The `vercel.json` configuration file is included for optimal deployment settings.

## 🖼️ Image Assets

The project includes high-quality images in multiple formats:
- **WebP** - Modern, optimized format
- **AVIF** - Next-generation image format
- **JPG** - Fallback format

All images are optimized for web performance and responsive display.

## 🎯 Key Components

### HeroSection
- Parallax scrolling effect
- Luxury gradient overlays
- Responsive background images

### GallerySection
- Interactive image gallery
- Lightbox functionality
- Smooth transitions

### TechMarquee
- Animated technology showcase
- Smooth scrolling marquee

### LogoLoader
- Custom loading animation
- Reusable across the application

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update CSS variables in `src/index.css`
- Add custom animations in the Tailwind config

### Images
- Add new images to `public/assets/`
- Update image references in components
- Optimize images for web performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ for luxury property showcases**