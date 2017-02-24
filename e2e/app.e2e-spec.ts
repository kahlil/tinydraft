import { TinydraftPage } from './app.po';

describe('tinydraft App', () => {
  let page: TinydraftPage;

  beforeEach(() => {
    page = new TinydraftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
