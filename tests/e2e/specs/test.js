// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
  it('Display the list of speaker', () => {
    cy.visit('/')
    cy.get('.speaker').first().find('p')
    cy.get('.speaker').first().find('img').should('have.attr', 'src')
  })
})
