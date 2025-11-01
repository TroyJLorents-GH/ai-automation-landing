# AI Automation Landing Page

A modern, professional landing page for an AI automation service business built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive and mobile-optimized layout
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth animations
- **Complete Sections**:
  - Hero section with compelling headline and CTA
  - Problems/Pain Points section highlighting customer challenges
  - Services section showcasing automation types
  - How It Works process explanation (4-step guide)
  - Case Study with real results and metrics
  - Pricing tiers (Starter, Professional, Enterprise)
  - Contact form with Calendly integration placeholder
  - Footer with links and social media

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ai-automation-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Update Content

All sections are in separate component files under `src/components/`:

- `Hero.tsx` - Main hero section
- `Problems.tsx` - Pain points section
- `Services.tsx` - Services offered
- `HowItWorks.tsx` - Process steps
- `CaseStudy.tsx` - Example/case study
- `Pricing.tsx` - Pricing tiers
- `Contact.tsx` - Contact form and Calendly
- `Footer.tsx` - Footer section

### 2. Add Calendly Integration

Replace the placeholder in `Contact.tsx` with your actual Calendly embed code:

1. Go to https://calendly.com and get your embed code
2. Open `src/components/Contact.tsx`
3. Replace the placeholder section (around line 150) with your Calendly widget code

Example:
```html
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/your-link"
  style={{minWidth: '320px', height: '630px'}}
></div>
<script
  type="text/javascript"
  src="https://assets.calendly.com/assets/external/widget.js"
></script>
```

### 3. Update Contact Information

In `Contact.tsx`, update:
- Email address (currently: `info@yourcompany.com`)
- Phone number (currently: `(555) 123-4567`)

### 4. Customize Colors

The main brand colors are defined in the components. To change:

- **Primary Color**: Blue/Indigo gradient (`from-blue-600 to-indigo-700`)
- Update these in `Hero.tsx`, `Pricing.tsx`, etc.

For global color changes, edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add more custom colors
    }
  }
}
```

### 5. Update Pricing

Edit `src/components/Pricing.tsx`:
- Modify the `plans` array to update prices, features, and tier names
- Add or remove pricing tiers as needed

### 6. Connect Contact Form

The contact form currently just logs to console. To connect it:

1. Open `src/components/Contact.tsx`
2. Find the `handleSubmit` function (around line 20)
3. Add your backend API call or email service integration

Example with fetch:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('https://your-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### 7. Add Analytics

Add Google Analytics, Facebook Pixel, or other analytics in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## Project Structure

```
ai-automation-landing/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Problems.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Performance Tips

- Images: Add actual images to the `/public` folder and reference them
- Lazy Loading: Consider lazy loading components below the fold
- Font Optimization: Use font-display: swap for custom fonts
- Bundle Size: Analyze with `npm run build -- --analyze`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your business!

## Support

For issues or questions:
- Check the component files for inline comments
- Review Tailwind CSS documentation: https://tailwindcss.com
- React documentation: https://react.dev

---

Built with ❤️ for small businesses looking to automate and grow
