const puppeteer = require('puppeteer');
const url= process.argv[2];

if(!url) {
    throw "Please provide URL as a first argument";
}

async function run () {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sanbox']
    })

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      });
    await page.goto(url);
    await page.screenshot({path: "screenshot.png"});
    browser.close();
}

run();