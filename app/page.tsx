import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Fast HTML→PDF
            </h1>
          </div>
          <Link 
            href="/demo"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            Try Demo →
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Convert HTML to PDF in Seconds
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Fast, reliable HTML to PDF conversion with full CSS support. Perfect for generating invoices, reports, and documents.
          </p>
          <Link 
            href="/demo"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            🚀 Launch Interactive Demo
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Lightning Fast</h3>
            <p className="text-slate-600">Blazing fast conversion with minimal overhead</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 8a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Full CSS Support</h3>
            <p className="text-slate-600">Every CSS property is fully supported</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 1H6a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 100-2H7V3h5v9a1 1 0 001 1h2a1 1 0 100-2h-1V2a1 1 0 00-1-1zm-2 3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Simple API</h3>
            <p className="text-slate-600">Easy to integrate and use in your projects</p>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Start</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-slate-900">Install the package</p>
                <pre className="bg-slate-100 p-3 rounded mt-2 overflow-x-auto text-sm">
                  npm install fast-html-pdf
                </pre>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-slate-900">Use in your project</p>
                <pre className="bg-slate-100 p-3 rounded mt-2 overflow-x-auto text-sm">
{`import { HtmlToPdf } from 'fast-html-pdf';

const converter = new HtmlToPdf();
const pdf = await converter.convert(htmlString);`}
                </pre>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-slate-900">Try the interactive demo</p>
                <Link 
                  href="/demo"
                  className="text-blue-600 hover:text-blue-700 font-semibold mt-2 inline-block"
                >
                  Go to Demo →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to convert HTML to PDF?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our interactive demo lets you test fast-html-pdf with your own HTML. No sign-up required!
          </p>
          <Link 
            href="/demo"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Open Interactive Demo
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100 mt-20 py-8 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
          <p>Built with Next.js • Powered by Playwright</p>
          <p className="mt-2 text-sm">
            <a href="https://github.com/nurmhm/fast-html-pdf" className="text-blue-600 hover:text-blue-700 font-semibold">
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
