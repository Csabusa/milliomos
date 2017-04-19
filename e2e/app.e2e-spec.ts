import { MilliomosPage } from './app.po';

describe('milliomos App', () => {
  let page: MilliomosPage;

  beforeEach(() => {
    page = new MilliomosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
