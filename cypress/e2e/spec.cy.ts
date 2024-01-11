/// <reference types="cypress" />

describe('AskSoeren', () => {
  const url = 'http://localhost:5173/'

  it('should be possible to ask a question and get an answer', () => {
    cy.visit(url)
    cy.get('[data-testid="title"]').should('include.text', 'Ask Søren')

    cy.get('[data-testid="answer-heading"]').should('not.exist')
    cy.get('[data-testid="answer-text"]').should('not.exist')

    cy.get('[data-testid="style-select"]').select('British High Class')
    cy.get('[data-testid="style-select"]').should('have.value', 'british')

    cy.get('[data-testid="question-input"]').type('what is IQ?')
    cy.get('[data-testid="submit-button"]').click()
    cy.get('[data-testid="answer-heading"]').should('exist')
    cy.get('[data-testid="answer-text"]').should('exist')
  })
})
