module.exports = {

  before(browser) {
    // browser.setupPerfectoReportingClient(() => {
    browser.maximizeWindow();
    // });
  },

  after(browser) {
    console.log(new Date().toLocaleString() + ':================================ Test CASE ENDED ======================\n');
    browser.end();
  },

  'Demo test Google': function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
    browser.saveScreenshot('./screenshots/cnn.jpg');
  }
}