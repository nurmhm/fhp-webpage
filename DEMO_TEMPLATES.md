# 📊 Fast HTML→PDF Demo - Complete Template Showcase

A comprehensive, multi-template demo application showcasing your `fast-html-pdf` package with **Server Functions** (not API routes) for secure PDF generation.

## 🚀 What's New

### ✨ **5 Pre-built Templates**
1. **✏️ Free Editor** - Write custom HTML and convert to PDF
2. **🧾 Invoice** - Professional invoice template with itemized billing
3. **📊 Report** - Business report with KPIs and analysis sections
4. **🏆 Certificate** - Achievement certificate with gradient backgrounds
5. **📈 Data Table** - Sales data export with summary statistics

### 🔐 **Server Functions (Secure)**
- Uses `'use server'` directive for secure, server-side PDF generation
- No API routes needed - direct Server Function calls
- Base64 encoding for safe client transmission
- Full error handling and validation

### 🎨 **Dark & Light Themes**
- Beautiful blue color scheme (indigo to slate)
- Smooth theme toggle
- Responsive design for all devices

## 📂 Project Structure

```
my-app/
├── app/
│   ├── page.tsx                 # Home/landing page
│   ├── demo/
│   │   └── page.tsx            # ⭐ 5-template demo with dark/light mode
│   ├── actions/
│   │   └── pdf.ts              # ⭐ Server Function for PDF generation
│   ├── api/
│   │   └── generate-pdf/
│   │       └── route.ts        # (Optional) Legacy API route
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── package.json                # Dependencies
└── tsconfig.json              # TypeScript config
```

## 📦 Dependencies

All necessary packages are already installed:
- ✅ `fast-html-pdf` - Your PDF conversion package
- ✅ `lucide-react` - Beautiful icons
- ✅ `TailwindCSS` - Styling
- ✅ `Next.js 16+` - React framework

## 🚀 Running the Demo

```bash
# Start development server
pnpm dev

# Visit the application
# Home: http://localhost:3000
# Demo: http://localhost:3000/demo
```

## 💡 How It Works

### Server Function Approach (NEW!)

**File: `app/actions/pdf.ts`**
```typescript
'use server';

export async function generatePDF(html: string) {
    const pdfBuffer = await htmlToPdfBuffer(html, {
        format: 'A4',
        printBackground: true,
    });
    
    return {
        success: true,
        data: pdfBuffer.toString('base64'),
        fileName: `document-${Date.now()}.pdf`,
    };
}
```

**File: `app/demo/page.tsx`**
```typescript
'use client';

import { generatePDF } from '@/app/actions/pdf';

// Inside component:
const result = await generatePDF(html);
const blob = new Blob([bytes], { type: 'application/pdf' });
// Download...
```

### Why Server Functions?
- ✅ **Secure** - Runs on server, not exposed to client
- ✅ **Simple** - No API route boilerplate
- ✅ **Direct** - Direct function calls, no HTTP overhead
- ✅ **Automatic** - Next.js handles serialization
- ✅ **Type-safe** - Full TypeScript support

## 🎯 Templates Overview

### 1. ✏️ Free Editor
- Custom HTML input
- Real-time editing
- No restrictions
- Perfect for testing custom designs

### 2. 🧾 Invoice
- Professional layout
- Bill-to/Ship-to sections
- Itemized table
- Dynamic totals
- Great for billing systems

### 3. 📊 Report
- Executive summary
- KPI statistics cards
- Highlighted sections
- Professional styling
- Multi-section layout

### 4. 🏆 Certificate
- Beautiful gradient background
- Centered layout
- Decorative borders
- Customizable recipient
- Perfect for achievements

### 5. 📈 Data Table
- Responsive table layout
- Status badges
- Summary statistics
- Alternating row colors
- Hover effects

## 🎨 Theme System

Two beautiful themes built with TailwindCSS:

**Light Theme:**
- Background: Blue gradient (blue-50 → indigo-50)
- Text: Dark slate
- Accents: Blue-500 to indigo-600
- Hover effects included

**Dark Theme:**
- Background: Dark slate (slate-900)
- Text: White/light gray  
- Accents: Blue-600 to indigo-600
- Smooth transitions

## 🛠️ PDF Generation Options

Customize PDF output in `app/actions/pdf.ts`:

```typescript
const pdfBuffer = await htmlToPdfBuffer(html, {
    format: 'A4',                           // Page size
    landscape: false,                       // Orientation
    margin: { top: 10, right: 10, ... },   // Margins in mm
    printBackground: true,                  // Include CSS backgrounds
    scale: 1,                               // Scaling factor
    displayHeaderFooter: false,            // Add header/footer
    headerTemplate: '<h1>Header</h1>',    // Custom header
    footerTemplate: '<p>Page <span class="pageNumber"></span></p>',
    timeout: 30000,                         // Timeout in ms
});
```

## 📱 Features Implemented

- ✅ Multiple pre-built templates
- ✅ Custom HTML editor with syntax highlighting
- ✅ Dark/Light theme toggle
- ✅ Real-time template switching
- ✅ Server-side PDF generation
- ✅ Base64 encoding for safe transmission
- ✅ Error handling and validation
- ✅ Success notifications
- ✅ Loading states
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Tailwind styling

## 🔧 Customization Guide

### Adding a New Template

1. Add to `TEMPLATES` object in `app/demo/page.tsx`:

```typescript
const TEMPLATES = {
    // ... existing templates ...
    myTemplate: {
        name: '📄 My Template',
        icon: FileText,
        description: 'My custom template',
        html: `<!DOCTYPE html>...`
    }
};
```

2. The template will automatically appear in the navigation!

### Styling Templates

Edit the `<style>` tags inside each template's HTML string. All CSS is supported:

```html
<style>
    body { font-family: Arial; }
    .highlight { color: #1e40af; }
    table { border-collapse: collapse; }
    @media print { /* Print-specific styles */ }
</style>
```

### Modifying PDF Options

Edit `app/actions/pdf.ts`:

```typescript
const pdfBuffer = await htmlToPdfBuffer(html, {
    format: 'A4',  // Change to 'Letter' for US
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
    // Add more options...
});
```

## 📚 Resources

- [fast-html-pdf Documentation](https://github.com/nurmhm/fast-html-pdf)
- [Next.js Server Functions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-functions)
- [Playwright PDF API](https://playwright.dev/docs/api/class-page#page-pdf)
- [TailwindCSS Docs](https://tailwindcss.com)

## 🐛 Troubleshooting

### PDF Not Generating
- Check browser console for errors
- Verify HTML is valid
- Check server logs: `pnpm dev` output

### Styles Not Appearing
- Use inline `<style>` tags (not CSS-in-JS)
- Set `printBackground: true`
- Avoid media queries unless intentional

### Large File Sizes
- Optimize images in HTML
- Use efficient CSS
- Consider splitting documents

### Playwright Issues
- Ensure Playwright is installed: `npm install playwright`
- Check that `fast-html-pdf` dependency works

## 📝 License

MIT - Same as your `fast-html-pdf` package

---

**Built with ❤️ using Next.js 16, React 19, TypeScript, TailwindCSS, and your fast-html-pdf package**

Try the demo now! Head to http://localhost:3000/demo
