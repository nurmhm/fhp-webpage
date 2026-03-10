'use server';

import { htmlToPdfBuffer } from 'fast-html-pdf';

export async function generatePDF(html: string) {
    try {
        if (!html || typeof html !== 'string') {
            return {
                success: false,
                error: 'HTML content is required',
            };
        }

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

        // Convert buffer to base64 for transmission
        return {
            success: true,
            data: pdfBuffer.toString('base64'),
            fileName: `document-${Date.now()}.pdf`,
        };
    } catch (error) {
        console.error('PDF generation error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to generate PDF',
        };
    }
}
