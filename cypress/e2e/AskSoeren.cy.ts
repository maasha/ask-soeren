/// <reference types="cypress" />

describe('AskSoeren', () => {
  it('should load the page successfully', () => {
    cy.visit('/')
    cy.get('[data-testid="title"]').should('include.text', 'Ask Søren')
  })

  it('should be possible to select an answer style', () => {
    cy.visit('/')
    cy.get('[data-testid="style-select"]').select('British High Class')
    cy.get('[data-testid="style-select"]').should('have.value', 'british')
  })

  it('should be possible to post a question and obtain an answer', () => {
    const response = {
      choices: [
        {
          message: {
            content: 'foo',
          },
        },
      ],
    }

    cy.intercept('POST', 'https://api.openai.com/v1/chat/completions', {
      statusCode: 200,
      body: response,
    }).as('askOpenAI')

    cy.visit('/')
    cy.get('[data-testid="answer-heading"]').should('not.exist')
    cy.get('[data-testid="answer-text"]').should('not.exist')
    cy.get('[data-testid="question-input"]').type('what is IQ?')
    cy.get('[data-testid="submit-button"]').click()

    cy.wait('@askOpenAI').then((interception) => {
      expect(interception.response?.body).to.deep.equal(response)
    })

    cy.get('[data-testid="answer-heading"]').should('exist')
    cy.get('[data-testid="answer-text"]').should('exist')
  })
})
