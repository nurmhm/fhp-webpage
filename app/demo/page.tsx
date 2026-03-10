'use client';

import { useState } from 'react';
import { Moon, Sun, Download, Zap, FileText, Award, Table2, Code } from 'lucide-react';
import { generatePDF } from '@/app/actions/pdf';

const TEMPLATES = {
    basic: {
        name: '✏️ Free Editor',
        icon: Code,
        description: 'Write your own HTML and convert to PDF',
        html: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 20px;
            background: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 { color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px; }
        h2 { color: #1e40af; margin-top: 20px; }
        .highlight { background: #dbeafe; padding: 2px 6px; border-radius: 3px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📄 Fast HTML PDF Demo</h1>
        <p>This PDF was generated from HTML using <span class="highlight">fast-html-pdf</span></p>
        
        <h2>Features:</h2>
        <ul>
            <li>⚡ Fast HTML to PDF conversion</li>
            <li>🎨 Full CSS support</li>
            <li>📱 Responsive design</li>
            <li>🔧 Simple and easy to use</li>
        </ul>

        <h2>Sample Content</h2>
        <p>You can convert any HTML to PDF with full styling support. Try editing the HTML in the editor and generating a new PDF!</p>
        
        <p style="margin-top: 40px; color: #64748b; font-size: 12px; text-align: center;">Generated on ${new Date().toLocaleString()}</p>
    </div>
</body>
</html>`,
    },
    invoice: {
        name: '🧾 Invoice',
        icon: FileText,
        description: 'Professional invoice template',
        html: `<!DOCTYPE html>
<html>
<head>
    <style>
        * { margin: 0; padding: 0; }
        body { font-family: 'Georgia', serif; color: #333; }
        .invoice { max-width: 900px; margin: 0 auto; padding: 40px; background: white; }
        .header { display: flex; justify-content: space-between; margin-bottom: 40px; border-bottom: 2px solid #1e40af; padding-bottom: 20px; }
        .company-name { font-size: 28px; font-weight: bold; color: #1e40af; }
        .invoice-title { font-size: 20px; color: #666; }
        .invoice-number { text-align: right; }
        .invoice-number div { margin: 5px 0; font-size: 14px; }
        .section { margin: 30px 0; }
        .section-title { font-size: 12px; font-weight: bold; color: #1e40af; text-transform: uppercase; margin-bottom: 10px; }
        .section-content { font-size: 14px; line-height: 1.8; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th { background: #dbeafe; padding: 12px; text-align: left; font-weight: bold; border: 1px solid #bfdbfe; }
        td { padding: 12px; border: 1px solid #bfdbfe; }
        .total-section { text-align: right; margin-top: 30px; }
        .total-row { font-size: 16px; font-weight: bold; margin: 10px 0; }
        .total-amount { font-size: 24px; color: #1e40af; border-top: 2px solid #1e40af; padding-top: 10px; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="invoice">
        <div class="header">
            <div>
                <div class="company-name">ACME Corp</div>
                <div style="font-size: 13px; color: #666; margin-top: 5px;">123 Business St, NY 10001</div>
            </div>
            <div class="invoice-number">
                <div class="invoice-title">INVOICE</div>
                <div><strong>Invoice #:</strong> INV-2024-001</div>
                <div><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
                <div><strong>Due Date:</strong> Net 30</div>
            </div>
        </div>

        <div style="display: flex; gap: 100px; margin: 30px 0;">
            <div>
                <div class="section-title">Bill To:</div>
                <div class="section-content">
                    John Doe<br>
                    456 Client Ave<br>
                    Los Angeles, CA 90001<br>
                    Email: john@example.com
                </div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th style="text-align: center;">Qty</th>
                    <th style="text-align: right;">Unit Price</th>
                    <th style="text-align: right;">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Web Development Services</td>
                    <td style="text-align: center;">40</td>
                    <td style="text-align: right;">$150.00</td>
                    <td style="text-align: right;">$6,000.00</td>
                </tr>
                <tr>
                    <td>UI/UX Design</td>
                    <td style="text-align: center;">20</td>
                    <td style="text-align: right;">$120.00</td>
                    <td style="text-align: right;">$2,400.00</td>
                </tr>
            </tbody>
        </table>

        <div class="total-section">
            <div class="total-row">Subtotal: $8,400.00</div>
            <div class="total-row">Tax (10%): $840.00</div>
            <div class="total-amount">TOTAL: $9,240.00</div>
        </div>

        <div class="footer">
            <p>Thank you for your business!</p>
        </div>
    </div>
</body>
</html>`,
    },
    report: {
        name: '📊 Report',
        icon: FileText,
        description: 'Professional business report',
        html: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; color: #222; line-height: 1.6; }
        .report { max-width: 900px; margin: 0 auto; padding: 50px 30px; }
        .cover-page { text-align: center; padding: 60px 20px; }
        .report-title { font-size: 42px; font-weight: 700; color: #1e40af; margin-bottom: 20px; }
        .report-subtitle { font-size: 18px; color: #666; margin-bottom: 40px; }
        .report-meta { font-size: 14px; color: #888; margin-top: 60px; }
        .section { margin: 40px 0; }
        .section-title { font-size: 24px; font-weight: 700; color: #1e40af; border-left: 4px solid #1e40af; padding-left: 15px; margin-bottom: 20px; }
        .subsection { margin: 20px 0; }
        .subsection-title { font-size: 16px; font-weight: 600; color: #1e40af; margin-bottom: 10px; }
        .content { font-size: 14px; text-align: justify; }
        .highlight-box { background: #dbeafe; border-left: 4px solid #1e40af; padding: 15px 20px; margin: 15px 0; border-radius: 4px; }
        .stats { display: flex; gap: 20px; margin: 20px 0; flex-wrap: wrap; }
        .stat-card { flex: 1; min-width: 200px; background: #f0f9ff; border: 1px solid #bfdbfe; padding: 20px; border-radius: 8px; text-align: center; }
        .stat-number { font-size: 32px; font-weight: bold; color: #1e40af; }
        .stat-label { font-size: 12px; color: #666; margin-top: 5px; }
    </style>
</head>
<body>
    <div class="report">
        <div class="cover-page">
            <div class="report-title">Q1 Performance Report</div>
            <div class="report-subtitle">2024 Analysis & Key Metrics</div>
            <div class="report-meta">
                <p>Prepared: ${new Date().toLocaleDateString()}</p>
                <p>Status: Official</p>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Executive Summary</div>
            <div class="content">
                This comprehensive analysis demonstrates strong performance across all metrics. We achieved a 25% increase in productivity with improved customer satisfaction and successful implementation of strategic initiatives.
            </div>
        </div>

        <div class="section">
            <div class="section-title">Key Performance Indicators</div>
            <div class="stats">
                <div class="stat-card"><div class="stat-number">+25%</div><div class="stat-label">Revenue Growth</div></div>
                <div class="stat-card"><div class="stat-number">4.8/5</div><div class="stat-label">Customer Satisfaction</div></div>
                <div class="stat-card"><div class="stat-number">1,247</div><div class="stat-label">New Customers</div></div>
            </div>
        </div>
    </div>
</body>
</html>`,
    },
    certificate: {
        name: '🏆 Certificate',
        icon: Award,
        description: 'Achievement certificate template',
        html: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; padding: 0; font-family: 'Georgia', serif; }
        .certificate { width: 100%; max-width: 1000px; margin: 0 auto; height: 700px; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white; position: relative; overflow: hidden; }
        .certificate::before { content: ''; position: absolute; top: 20px; left: 20px; width: 60px; height: 60px; border: 3px solid rgba(255,255,255,0.3); }
        .certificate::after { content: ''; position: absolute; bottom: 20px; right: 20px; width: 60px; height: 60px; border: 3px solid rgba(255,255,255,0.3); }
        .content { position: relative; z-index: 1; }
        .seal { font-size: 60px; margin-bottom: 20px; }
        .title { font-size: 48px; font-weight: bold; margin: 20px 0; letter-spacing: 2px; }
        .subtitle { font-size: 24px; margin: 15px 0; opacity: 0.9; }
        .divider { width: 300px; height: 2px; background: rgba(255,255,255,0.5); margin: 30px auto; }
        .recipient { font-size: 32px; font-weight: bold; margin: 30px 0; letter-spacing: 1px; }
        .achievement { font-size: 16px; margin: 20px 0 40px; max-width: 600px; line-height: 1.6; opacity: 0.95; }
        .date { margin-top: 40px; font-size: 14px; opacity: 0.8; }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="content">
            <div class="seal">🎓</div>
            <div class="title">CERTIFICATE OF ACHIEVEMENT</div>
            <div class="subtitle">This is to certify that</div>
            <div class="recipient">JOHN DOE</div>
            <div class="divider"></div>
            <div class="achievement">
                Has successfully demonstrated exceptional proficiency and completed all requirements with distinction.
            </div>
            <div class="date">Issued on ${new Date().toLocaleDateString()}</div>
        </div>
    </div>
</body>
</html>`,
    },
    table: {
        name: '📈 Data Table',
        icon: Table2,
        description: 'Sales data export template',
        html: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; color: #333; margin: 20px; }
        .container { max-width: 1000px; }
        .title { font-size: 24px; font-weight: bold; color: #1e40af; margin-bottom: 10px; }
        .subtitle { color: #666; margin-bottom: 30px; }
        table { width: 100%; border-collapse: collapse; margin: 30px 0; }
        thead { background: linear-gradient(to right, #1e40af, #3b82f6); color: white; }
        th { padding: 15px; text-align: left; font-weight: 600; }
        td { padding: 12px 15px; border-bottom: 1px solid #e5e7eb; }
        tbody tr:nth-child(even) { background: #f8fafc; }
        tbody tr:hover { background: #f0f9ff; }
        .status { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .status.active { background: #d1fae5; color: #065f46; }
        .status.pending { background: #fef3c7; color: #92400e; }
        .number { text-align: right; font-family: monospace; }
        .summary { margin-top: 40px; padding: 20px; background: #f0f9ff; border-left: 4px solid #1e40af; border-radius: 4px; }
        .summary-row { display: flex; justify-content: space-between; margin: 10px 0; }
        .summary-label { font-weight: 600; color: #1e40af; }
        .summary-value { font-weight: bold; font-size: 16px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">Sales Performance Report</div>
        <div class="subtitle">Monthly Sales Data - Q1 2024</div>

        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Units Sold</th>
                    <th class="number">Revenue</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Premium Software License</td>
                    <td>Software</td>
                    <td>145</td>
                    <td class="number">$36,250.00</td>
                    <td><span class="status active">Active</span></td>
                </tr>
                <tr>
                    <td>Consulting Services</td>
                    <td>Services</td>
                    <td>89</td>
                    <td class="number">$44,500.00</td>
                    <td><span class="status active">Active</span></td>
                </tr>
                <tr>
                    <td>Training Program</td>
                    <td>Education</td>
                    <td>234</td>
                    <td class="number">$29,250.00</td>
                    <td><span class="status pending">Pending</span></td>
                </tr>
                <tr>
                    <td>Support Package</td>
                    <td>Services</td>
                    <td>156</td>
                    <td class="number">$19,500.00</td>
                    <td><span class="status active">Active</span></td>
                </tr>
            </tbody>
        </table>

        <div class="summary">
            <div class="summary-row">
                <div class="summary-label">Total Revenue:</div>
                <div class="summary-value">$129,500.00</div>
            </div>
            <div class="summary-row">
                <div class="summary-label">Total Units:</div>
                <div class="summary-value">624</div>
            </div>
        </div>
    </div>
</body>
</html>`,
    },
};

export default function DemoPage() {
    const [isDark, setIsDark] = useState(false);
    const [activeTemplate, setActiveTemplate] = useState<keyof typeof TEMPLATES>('basic');
    const [html, setHtml] = useState(TEMPLATES.basic.html);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleTemplateChange = (template: keyof typeof TEMPLATES) => {
        setActiveTemplate(template);
        setHtml(TEMPLATES[template].html);
        setError(null);
        setSuccess(false);
    };

    const handleGeneratePDF = async () => {
        if (!html.trim()) {
            setError('Please enter HTML content');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const result = await generatePDF(html);

            if (!result.success) {
                setError(result.error || 'Failed to generate PDF');
                return;
            }

            // Convert base64 to blob and download
            const binaryString = atob(result.data || '');
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            const blob = new Blob([bytes], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = result.fileName || 'document.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={isDark ? 'dark' : ''}>
            <div className={`min-h-screen transition-colors duration-200 ${
                isDark 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-gradient-to-br from-blue-50 to-indigo-50 text-slate-900'
            }`}>
                {/* Header */}
                <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
                    isDark 
                        ? 'bg-slate-800/80 border-slate-700' 
                        : 'bg-white/80 border-blue-100'
                }`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}>
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Fast HTML→PDF Templates
                            </h1>
                        </div>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-lg transition-colors ${
                                isDark 
                                    ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400' 
                                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                            }`}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </header>

                {/* Template Navigation */}
                <nav className={`sticky top-16 z-40 backdrop-blur-md border-b transition-colors ${
                    isDark 
                        ? 'bg-slate-800/60 border-slate-700' 
                        : 'bg-white/60 border-blue-100'
                }`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
                        <div className="flex gap-2 py-3">
                            {Object.entries(TEMPLATES).map(([key, template]) => {
                                const Icon = template.icon;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => handleTemplateChange(key as keyof typeof TEMPLATES)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                                            activeTemplate === key
                                                ? isDark
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                                                : isDark
                                                ? 'text-slate-300 hover:bg-slate-700'
                                                : 'text-slate-600 hover:bg-blue-100'
                                        }`}
                                    >
                                        <Icon size={18} />
                                        {template.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* HTML Editor */}
                        <div className={`lg:col-span-2 rounded-xl overflow-hidden shadow-lg transition-colors ${
                            isDark 
                                ? 'bg-slate-800' 
                                : 'bg-white'
                        }`}>
                            <div className={`p-6 border-b ${
                                isDark 
                                    ? 'border-slate-700 bg-slate-700/50' 
                                    : 'border-blue-100 bg-blue-50/50'
                            }`}>
                                <h2 className={`text-lg font-semibold flex items-center gap-2 ${
                                    isDark ? 'text-white' : 'text-blue-900'
                                }`}>
                                    <Code size={20} />
                                    HTML Editor
                                </h2>
                            </div>
                            <div className="p-6">
                                <textarea
                                    value={html}
                                    onChange={(e) => setHtml(e.target.value)}
                                    className={`w-full h-96 p-4 rounded-lg font-mono text-sm border-2 focus:outline-none transition-colors resize-none ${
                                        isDark
                                            ? 'bg-slate-900 border-slate-600 text-green-400 focus:border-blue-500'
                                            : 'bg-slate-50 border-blue-200 text-slate-900 focus:border-blue-500'
                                    }`}
                                    placeholder="Enter your HTML here..."
                                    spellCheck="false"
                                />
                                <button
                                    onClick={() => handleTemplateChange(activeTemplate)}
                                    className={`mt-3 text-sm px-3 py-1 rounded transition-colors ${
                                        isDark
                                            ? 'text-blue-400 hover:text-blue-300'
                                            : 'text-blue-600 hover:text-blue-700'
                                    }`}
                                >
                                    ↺ Reset Template
                                </button>
                            </div>
                        </div>

                        {/* Sidebar Controls */}
                        <div className="space-y-6">
                            {/* Generate Button */}
                            <div className={`rounded-xl overflow-hidden shadow-lg transition-colors ${
                                isDark 
                                    ? 'bg-slate-800' 
                                    : 'bg-white'
                            }`}>
                                <div className={`p-6 border-b ${
                                    isDark 
                                        ? 'border-slate-700 bg-slate-700/50' 
                                        : 'border-blue-100 bg-blue-50/50'
                                }`}>
                                    <h2 className={`text-lg font-semibold flex items-center gap-2 ${
                                        isDark ? 'text-white' : 'text-blue-900'
                                    }`}>
                                        <Download size={20} />
                                        Generate
                                    </h2>
                                </div>
                                <div className="p-6">
                                    {error && (
                                        <div className="mb-4 p-3 rounded-lg bg-red-100/20 border border-red-500/50 text-red-600 text-sm">
                                            ❌ {error}
                                        </div>
                                    )}
                                    {success && (
                                        <div className="mb-4 p-3 rounded-lg bg-green-100/20 border border-green-500/50 text-green-600 text-sm">
                                            ✓ PDF generated!
                                        </div>
                                    )}
                                    <button
                                        onClick={handleGeneratePDF}
                                        disabled={loading}
                                        className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                                            loading
                                                ? 'opacity-50 cursor-not-allowed'
                                                : isDark
                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                                                : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white'
                                        }`}
                                    >
                                        <Download size={20} />
                                        {loading ? 'Generating...' : 'Download PDF'}
                                    </button>
                                </div>
                            </div>

                            {/* Template Info */}
                            <div className={`rounded-xl overflow-hidden shadow-lg transition-colors ${
                                isDark 
                                    ? 'bg-slate-800' 
                                    : 'bg-white'
                            }`}>
                                <div className={`p-6 border-b ${
                                    isDark 
                                        ? 'border-slate-700 bg-slate-700/50' 
                                        : 'border-blue-100 bg-blue-50/50'
                                }`}>
                                    <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-blue-900'}`}>
                                        📋 Template Info
                                    </h2>
                                </div>
                                <div className={`p-6 space-y-4 text-sm`}>
                                    <div>
                                        <p className={`font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Current:</p>
                                        <p className={isDark ? 'text-blue-400' : 'text-blue-600'}>{TEMPLATES[activeTemplate].name}</p>
                                    </div>
                                    <div>
                                        <p className={`font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Description:</p>
                                        <p className={isDark ? 'text-blue-400 text-xs' : 'text-blue-600 text-xs'}>{TEMPLATES[activeTemplate].description}</p>
                                    </div>
                                    <div>
                                        <p className={`font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Format:</p>
                                        <p className={isDark ? 'text-blue-400' : 'text-blue-600'}>A4 PDF</p>
                                    </div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className={`rounded-xl overflow-hidden shadow-lg transition-colors ${
                                isDark 
                                    ? 'bg-slate-800' 
                                    : 'bg-white'
                            }`}>
                                <div className={`p-6 border-b ${
                                    isDark 
                                        ? 'border-slate-700 bg-slate-700/50' 
                                        : 'border-blue-100 bg-blue-50/50'
                                }`}>
                                    <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-blue-900'}`}>
                                        ✨ Features
                                    </h2>
                                </div>
                                <div className={`p-6 space-y-3 text-sm`}>
                                    <div className="flex gap-2">
                                        <span className="text-blue-500 font-bold">⚡</span>
                                        <div className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                                            <p className="font-semibold">Fast</p>
                                            <p className="text-xs opacity-75">Instant conversion</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-blue-500 font-bold">🎨</span>
                                        <div className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                                            <p className="font-semibold">CSS Support</p>
                                            <p className="text-xs opacity-75">Full styling</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-blue-500 font-bold">🔧</span>
                                        <div className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                                            <p className="font-semibold">Easy</p>
                                            <p className="text-xs opacity-75">Simple API</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
