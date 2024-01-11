/// <reference types="cypress" />

describe('AskSoeren', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  const response = {
    choices: [
      {
        message: {
          content: 'foo',
        },
      },
    ],
  }

  it('spy', () => {
    cy.intercept('POST', 'https://api.openai.com/v1/chat/completions', {
      statusCode: 200,
      body: response,
    }).as('askOpenAI')

    cy.visit('/')
    cy.get('[data-testid="question-input"]').type('what is IQ?')
    cy.get('[data-testid="submit-button"]').click()

    cy.wait('@askOpenAI').then((interception) => {
      expect(interception.response?.body).to.deep.equal(response)
    })
  })

  it.skip('should test something', () => {
    cy.stubAskOpenAI().as('askOpenAI')
    cy.visit('/')
    // Your test code goes here
    cy.get('[data-testid="question-input"]').type('what is IQ?')
    cy.get('[data-testid="submit-button"]').click()
    // You can now access the intercepted response using cy.wait('@askOpenAI')

    try {
      cy.wait('@askOpenAI').then((interception) => {
        console.log({ interception })
        console.log('Intercepted Response:', interception.response?.body)

        const responseContent = interception.response?.body.choices[0].message.content
      })
    } catch (error) {
      // Log or handle the error
      cy.log(`Caught an error: ${error.message}`)
    }
    // Use responseContent as needed in your test
  })

  it.skip('should be possible to ask a question and get an answer', () => {
    cy.visit('/')
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
