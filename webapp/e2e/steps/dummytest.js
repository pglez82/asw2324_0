const puppeteer = require('puppeteer');

let browser;
let page;

describe('Google', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage();
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });

  afterAll(async ()=>{
    browser.close()
  })
});