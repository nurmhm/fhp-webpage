'use server';

import { htmlToPdfBuffer } from 'html-to-pdf-pro';

export async function generatePDFPro(html: string) {
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
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm',
            },
            printBackground: true,
        });

        // Convert buffer to base64 for transmission
        return {
            success: true,
            data: pdfBuffer.toString('base64'),
            fileName: `document-pro-${Date.now()}.pdf`,
            library: 'html-to-pdf-pro',
        };
    } catch (error) {
        console.error('PDF generation error (html-to-pdf-pro):', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to generate PDF',
            library: 'html-to-pdf-pro',
        };
    }
}
