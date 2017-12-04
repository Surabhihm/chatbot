import { ChatbotPage } from './app.po';

describe('chatbot App', () => {
  let page: ChatbotPage;

  beforeEach(() => {
    page = new ChatbotPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
