const { spawn } = require('child_process');

const BROWSER_TARGETS = {
    chrome: 'chromium',
    firefox: 'firefox-desktop'
};

// Get browser target from command line arguments
const target = process.argv[2];

// Validate the target
if (!target || !['chrome', 'firefox'].includes(target.toLowerCase())) {
    console.error('Please specify a target: "chrome" or "firefox"');
    process.exit(1);
}

// Map the target to web-ext target value
const targetBrowser = BROWSER_TARGETS[target.toLowerCase()];

// Determine the start URL based on the target
const startUrl = `file:///${process.cwd().replace(/\\/g, '/')}/test/README.html`;

// Construct the web-ext command
const command = `web-ext run --source-dir ./dist/ --target ${targetBrowser} --start-url ${startUrl}`;

// Execute the command
spawn(command, { shell: true, stdio: 'inherit' });
