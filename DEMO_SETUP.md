# 🎨 Fast HTML→PDF Demo Setup

A beautiful, fully-featured demo web application for your `fast-html-pdf` package, built with Next.js, React, and TailwindCSS.

## ✨ Features

- **🌙 Dark & Light Theme Toggle** - Beautiful dark and light blue color schemes
- **📝 HTML Editor** - Edit and paste your HTML directly in the browser
- **⬇️ PDF Download** - Generate and download PDFs instantly
- **🎯 Interactive Demo** - Test your HTML with real-time conversion
- **📱 Responsive Design** - Works perfectly on desktop and mobile
- **🚀 Server-side Rendering** - Uses Next.js API routes for PDF generation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (or use pnpm)
- pnpm or npm package manager

### Installation

All dependencies have been automatically installed:
- ✅ `fast-html-pdf` - Your PDF conversion package
- ✅ `lucide-react` - Beautiful icons
- ✅ TailwindCSS - For styling
- ✅ Next.js 16+ - React framework

### Running the Demo

```bash
# Development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
my-app/
├── app/
│   ├── page.tsx              # Home/landing page
│   ├── demo/
│   │   └── page.tsx          # Interactive demo page
│   ├── api/
│   │   └── generate-pdf/
│   │       └── route.ts      # PDF generation API endpoint
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript config
```

## 🎯 Pages

### Home Page (`/`)
- Landing page showcasing your package
- Features overview
- Quick start guide
- Call-to-action buttons linking to the demo

### Demo Page (`/demo`)
- Main interactive demo page
- HTML input textarea with syntax highlighting
- Dark/Light theme toggle
- PDF download functionality
- Features showcase
- Usage instructions

## 🔌 API Endpoint

### POST `/api/generate-pdf`

Converts HTML to PDF using your `fast-html-pdf` package.

**Request:**
```json
{
  "html": "<h1>Hello World</h1><p>This is a test PDF.</p>"
}
```

**Response:**
- Returns a PDF file for download
- Or JSON error response if conversion fails

**Example Usage (Client-side):**
```typescript
const response = await fetch('/api/generate-pdf', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ html })
});

const blob = await response.blob();
const url = window.URL.createObjectURL(blob);
// Download or use the PDF blob
```

## 🎨 Theme Colors

The demo uses a beautiful blue color scheme with two themes:

**Light Theme:**
- Background: Blue gradient (blue-50 → indigo-50)
- Text: Dark slate
- Accents: Blue-500 to indigo-600

**Dark Theme:**
- Background: Dark slate (slate-900)
- Text: White/light gray
- Accents: Blue-600 to indigo-600

## 🛠️ Customization

### Adding More Features

1. **Modify the demo page**: Edit [`app/demo/page.tsx`](app/demo/page.tsx)
2. **Add API routes**: Create new files in `app/api/`
3. **Update styles**: Edit TailwindCSS classes or `app/globals.css`

### PDF Options

You can customize PDF generation in `app/api/generate-pdf/route.ts`:

```typescript
const pdfBuffer = await htmlToPdfBuffer(html, {
  format: 'A4',           // Page size
  landscape: false,       // Orient
  margin: { ... },        // Margins
  printBackground: true,  // Include backgrounds
  scale: 1,              // Scaling
  // ... more Playwright options
});
```

## 📚 Resources

- [fast-html-pdf Documentation](https://github.com/nurmhm/fast-html-pdf)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Playwright PDF Options](https://playwright.dev/docs/api/class-page#page-pdf)

## 🐛 Troubleshooting

### PDF generation fails on server
- Ensure Playwright is properly installed (it's a dependency of `fast-html-pdf`)
- Check that the HTML string is valid
- Look at console errors in `npm run dev` output

### Styles not applied in PDF
- Ensure CSS is inline or using `<style>` tags
- Avoid CSS-in-JS solutions
- Set `printBackground: true` in PDF options

### Large PDFs
- Optimize images in your HTML
- Use efficient CSS
- Consider splitting large documents

## 📝 License

MIT - Your package is shared under the MIT license

---

**Built with ❤️ using Next.js, React, and fast-html-pdf**
