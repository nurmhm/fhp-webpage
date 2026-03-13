import fetch from 'node-fetch';

const testHtml = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            padding: 20px; 
            background: #f5f5f5;
        }
        .header { background: #2c3e50; color: white; padding: 20px; }
        h1 { margin: 0; }
        .content { background: white; padding: 20px; margin-top: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #f0f0f0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Test PDF Document</h1>
    </div>
    <div class="content">
        <h2>Performance Test</h2>
        <p>This is a test document to verify html-to-pdf-pro functionality.</p>
        <table>
            <tr>
                <th>Feature</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>Cross-platform</td>
                <td>✅ Supported</td>
            </tr>
            <tr>
                <td>Browser reuse</td>
                <td>✅ Enabled</td>
            </tr>
            <tr>
                <td>CSS Support</td>
                <td>✅ Full</td>
            </tr>
        </table>
    </div>
</body>
</html>
`;

async function testBothLibraries() {
    console.log('🧪 Testing HTML to PDF Generation\n');
    console.log('='.repeat(50));

    // Test 1: fast-html-pdf
    console.log('\n📦 Testing: fast-html-pdf');
    console.log('-'.repeat(50));
    const start1 = Date.now();
    
    // Since we're testing server-side, we'll just import and test directly
    try {
        const { htmlToPdfBuffer: htmlToPdfBufferOld } = await import('fast-html-pdf');
        const pdf1 = await htmlToPdfBufferOld(testHtml);
        const time1 = Date.now() - start1;
        console.log(`✅ Success`);
        console.log(`⏱️  Time: ${time1}ms`);
        console.log(`📊 Size: ${(pdf1.length / 1024).toFixed(2)} KB`);
    } catch (error) {
        console.log(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Test 2: html-to-pdf-pro
    console.log('\n📦 Testing: html-to-pdf-pro');
    console.log('-'.repeat(50));
    const start2 = Date.now();
    
    try {
        const { htmlToPdfBuffer } = await import('html-to-pdf-pro');
        const pdf2 = await htmlToPdfBuffer(testHtml);
        const time2 = Date.now() - start2;
        console.log(`✅ Success`);
        console.log(`⏱️  Time: ${time2}ms`);
        console.log(`📊 Size: ${(pdf2.length / 1024).toFixed(2)} KB`);
    } catch (error) {
        console.log(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    console.log('\n' + '='.repeat(50));
    console.log('✅ Tests completed!\n');
}

testBothLibraries().catch(console.error);
