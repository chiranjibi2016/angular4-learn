import { Angular4LearnPage } from './app.po';

describe('angular4-learn App', () => {
  let page: Angular4LearnPage;

  beforeEach(() => {
    page = new Angular4LearnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
