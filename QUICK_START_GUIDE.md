# 🎉 Fast HTML→PDF Demo - Quick Start Guide

## ✅ Setup Complete!

Your demo application is fully set up with **5 professional templates** and **Server Functions** for secure PDF generation.

## 🚀 Get Started

### 1. Start the Dev Server
```bash
cd my-app
pnpm dev
```

The dev server will start at **http://localhost:3000**

### 2. Open the Demo
Visit: **http://localhost:3000/demo**

### 3. Choose a Template
Click any template button to load pre-built examples:
- ✏️ **Free Editor** - Custom HTML input
- 🧾 **Invoice** - Professional billing
- 📊 **Report** - Business analytics
- 🏆 **Certificate** - Achievements
- 📈 **Data Table** - Sales reports

### 4. Generate PDF
1. Edit the HTML (or use template as-is)
2. Click **"Download PDF"** button
3. PDF downloads automatically!

### 5. Toggle Theme
Click the moon/sun icon in top-right to switch between dark and light themes.

## 📁 Project Files

### New Files Created:
```
✨ app/actions/pdf.ts          # Server Function for PDF generation
✨ app/demo/page.tsx           # 5-template demo showcase
✨ DEMO_TEMPLATES.md           # Full documentation
✨ QUICK_START_GUIDE.md        # This file!
```

### Updated Files:
```
📝 app/page.tsx               # New landing page
📝 app/layout.tsx             # Updated metadata
```

### Optional (Legacy):
```
🔧 app/api/generate-pdf/      # API route (unused with Server Functions)
```

## 🎯 Template Examples

### Invoice Template
Professional billing layout with:
- Company header
- Bill-to section
- Item table with pricing
- Automatic totals
- Footer message

### Report Template
Business report with:
- Cover page
- Executive summary
- KPI statistics
- Key achievements
- Professional formatting

### Certificate Template
Achievement recognition with:
- Gradient background
- Centered layout
- Recipient name
- Issue date
- Decorative elements

### Data Table Template
Sales export with:
- Responsive table
- Status badges
- Summary statistics
- Professional styling
- Print-ready design

## 💡 Key Features

✅ **5 Pre-built Templates** - Ready to use
✅ **Server Functions** - Secure, no API routes
✅ **Dark/Light Themes** - Blue color scheme
✅ **HTML Editor** - Full custom HTML support
✅ **Responsive Design** - Works on all devices
✅ **TypeScript** - Full type safety
✅ **Error Handling** - Comprehensive validation
✅ **Real-time Preview** - Edit and test instantly

## 🔐 How Server Functions Work

Instead of API routes, we use Next.js **Server Functions**:

**File: `app/actions/pdf.ts`**
```typescript
'use server';

export async function generatePDF(html: string) {
    const pdfBuffer = await htmlToPdfBuffer(html, {...});
    return {
        success: true,
        data: pdfBuffer.toString('base64'),
        fileName: `document-${Date.now()}.pdf`,
    };
}
```

**Why?**
- ✅ Simpler - No HTTP routing needed
- ✅ Secure - Runs on server only
- ✅ Safer - No API endpoints exposed
- ✅ Direct - Function calls, not fetch requests

## 🎨 Customize Your Demo

### Add a New Template

Edit `app/demo/page.tsx` and add to the `TEMPLATES` object:

```typescript
const TEMPLATES = {
    myTemplate: {
        name: '📝 My Template',
        icon: FileText,
        description: 'My custom template',
        html: `<!DOCTYPE html>
<html>
<head><style>/* your styles */</style></head>
<body>/* your content */</body>
</html>`
    }
};
```

### Change PDF Format

Edit `app/actions/pdf.ts`:

```typescript
const pdfBuffer = await htmlToPdfBuffer(html, {
    format: 'Letter',  // US letter size
    landscape: true,   // Landscape mode
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
});
```

### Modify Theme Colors

Edit TailwindCSS classes in `app/demo/page.tsx`:
- Change `from-blue-600 to-indigo-600` to other colors
- Modify `bg-slate-800` for dark theme colors
- Update `bg-blue-50` for light theme colors

## 🐛 Troubleshooting

### PDF Generation Fails
1. Check the terminal for error messages
2. Make sure HTML is valid
3. Verify images/resources load correctly
4. Check the browser console

### Styles Missing from PDF
1. Use `<style>` tags, not external CSS
2. Ensure `printBackground: true` in options
3. Avoid CSS-in-JS solutions
4. Test with inline styles if needed

### Large PDF File Size
1. Compress images in your HTML
2. Remove unnecessary styles
3. Simplify the layout
4. Avoid embedding large resources

### Server Not Starting
1. Clear `.next` folder: `rm -r .next`
2. Reinstall dependencies: `pnpm install`
3. Check Node version: `node --version`
4. Try again: `pnpm dev`

## 📚 Documentation

- **Full Docs**: Read `DEMO_TEMPLATES.md`
- **API Docs**: Visit fast-html-pdf GitHub
- **Next.js Docs**: https://nextjs.org/docs
- **TailwindCSS**: https://tailwindcss.com

## 🎬 Demo Workflow

```
1. Open http://localhost:3000/demo
   ↓
2. Select a template (Invoice, Report, etc.)
   ↓
3. Edit HTML in the editor (optional)
   ↓
4. Click "Download PDF"
   ↓
5. PDF file downloads automatically
   ↓
6. Open in any PDF reader
```

## 🚀 Next Steps

1. **Test each template** - Try all 5 templates
2. **Edit HTML** - Customize templates to your needs
3. **Add templates** - Create your own templates
4. **Deploy** - Deploy to production with `pnpm build`
5. **Share** - Show it to your users/clients

## 🎁 Bonus Features

- ✨ Smooth theme transitions
- 🎯 Tab navigation between templates
- ✅ Success/error notifications
- 📱 Mobile-responsive layout
- 🔥 Syntax highlighting in editor
- 🎨 Beautiful UI components

## 💬 Support

If you encounter issues:
1. Check `DEMO_TEMPLATES.md` for detailed docs
2. Review error messages in browser console
3. Check terminal output from `pnpm dev`
4. Verify all dependencies installed: `pnpm install`

## 🎉 You're All Set!

Your fast-html-pdf demo is ready to impress!

**Start here**: `http://localhost:3000/demo`

---

Happy converting! 🚀
