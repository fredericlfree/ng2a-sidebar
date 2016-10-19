import { Ng2aSidebarPage } from './app.po';

describe('ng2a-sidebar App', function() {
  let page: Ng2aSidebarPage;

  beforeEach(() => {
    page = new Ng2aSidebarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
