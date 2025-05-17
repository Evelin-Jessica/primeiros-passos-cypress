import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const SelectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton:  "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert-content"
  }

  it('Login - Success', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(SelectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(SelectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(SelectorsList.dashboardGrid)
  })
it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userFail.username)
    cy.get(SelectorsList.passwordField).type(userData.userFail.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialAlert)
})

})