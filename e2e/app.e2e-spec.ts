import { RJEAssetsPage } from './app.po';

describe('rjeassets App', () => {
  let page: RJEAssetsPage;

  beforeEach(() => {
    page = new RJEAssetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
