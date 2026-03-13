import { NextRequest, NextResponse } from 'next/server';
import { htmlToPdfBuffer } from 'html-to-pdf-pro';

export async function POST(request: NextRequest) {
    try {
        const { html } = await request.json();

        if (!html || typeof html !== 'string') {
            return NextResponse.json(
                { error: 'HTML content is required' },
                { status: 400 }
            );
        }

        // Generate PDF from HTML using html-to-pdf-pro
        const pdfBuffer = await htmlToPdfBuffer(html, {
            format: 'A4',
            margin: {
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm',
            },
            printBackground: true,
        });

        // Return PDF as response
        return new NextResponse(new Uint8Array(pdfBuffer), {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="document-pro-${Date.now()}.pdf"`,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'X-Generated-By': 'html-to-pdf-pro',
            },
        });
    } catch (error) {
        console.error('PDF generation error (html-to-pdf-pro):', error);
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'Failed to generate PDF',
                library: 'html-to-pdf-pro',
            },
            { status: 500 }
        );
    }
}
