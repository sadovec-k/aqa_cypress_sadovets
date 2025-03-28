import LoginPage from '../e2e/cypress_actions/LoginPage.js';

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })

  Cypress.Commands.add('login', (userEmail, password) => {
    LoginPage
    .typeEmail(userEmail)
    .typePassword(password)
    .clickRememberMe()
    .clickLogin();
  });
 