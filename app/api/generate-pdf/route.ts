import { NextRequest, NextResponse } from 'next/server';
import { htmlToPdfBuffer } from 'fast-html-pdf';

export async function POST(request: NextRequest) {
    try {
        const { html } = await request.json();

        if (!html || typeof html !== 'string') {
            return NextResponse.json(
                { error: 'HTML content is required' },
                { status: 400 }
            );
        }

        // Generate PDF from HTML using fast-html-pdf
        const pdfBuffer = await htmlToPdfBuffer(html, {
            format: 'A4',
            margin: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10,
            },
            printBackground: true,
        });
      


        // Return PDF as response
   return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="document-${Date.now()}.pdf"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
});
    } catch (error) {
        console.error('PDF generation error:', error);
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'Failed to generate PDF' 
            },
            { status: 500 }
        );
    }
}
