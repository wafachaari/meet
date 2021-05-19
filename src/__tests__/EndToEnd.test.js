import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(300000);
    browser = await puppeteer.launch({headless: false });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.Event .show_event');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {

    await page.click('.Event .show_btn');
    const eventDetails = await page.$('.Event .show_event');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .show_btn');
    const eventDetails = await page.$('.Event .show_event');
    expect(eventDetails).toBeNull();
  });
});



describe('Filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('By default, when user hasn’t searched for a city, show upcoming events based on the user’s location', async () => {
    const events = await page.$$('.Event');
    expect(events).toHaveLength(3);
  })

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin');
    // CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    const suggestions = await page.$$('.suggestions li');
    expect(suggestions).toHaveLength(2);

  })

  test('User can select a city from the suggested list', async () => {
    //await page.click('.suggestions li:nth-child(1)');
    await page.waitForSelector('.suggestions li');
    await page.type(".suggestions", "Berlin, Germany");

    //await page.click('.suggestions li:nth-child(1)' );
    const suggestions = await page.$$('.suggestions li');
    expect(suggestions).toHaveLength(1);
    /*   AppWrapper.find('.suggestions li').at(0).simulate('click');
       const CitySearchWrapper = AppWrapper.find(CitySearch);
       expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
       expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
   */
  });

})
