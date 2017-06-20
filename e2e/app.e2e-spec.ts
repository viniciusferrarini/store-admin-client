import { SlotshopAdminPage } from './app.po';

describe('slotshop-admin App', () => {
  let page: SlotshopAdminPage;

  beforeEach(() => {
    page = new SlotshopAdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
