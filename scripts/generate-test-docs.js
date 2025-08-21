const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');

// Initialize markdown-it with basic options
const md = new MarkdownIt({
    html: true, // Enable HTML tags in source
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true // Autoconvert URL-like text to links
});

// Read the markdown file
const markdownPath = path.join(__dirname, '../test/README.md');
const outputPath = path.join(__dirname, '../test/README.html');

try {
    // Read markdown content
    const markdownContent = fs.readFileSync(markdownPath, 'utf-8');
    
    // Convert to HTML
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Profiles - GitHub Social Icons</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 1rem;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    ${md.render(markdownContent)}
</body>
</html>`;
    
    // Write the HTML file
    fs.writeFileSync(outputPath, htmlContent);
    console.log('Documentation generated successfully!');
    console.log(`Output file: ${outputPath}`);

} catch (error) {
    console.error('Error generating documentation:', error);
    process.exit(1);
}
