```js
require('dotenv').config();
const puppeteer = require('puppeteer');

const u = process.env.U;
const p = process.env.P;

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();
  await page.goto('https://facebook.com/login');
  await page.waitForNavigation({ waitUntil: 'load' });
  await page.type('#email', u);
  await page.type('#pass', p);
  await page.click('#loginbutton');
}

run();
```
