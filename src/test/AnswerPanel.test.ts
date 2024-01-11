// Import necessary functions from testing library
import { render, screen } from '@testing-library/vue'
import AnswerPanel from '../components/AnswerPanel.vue'

describe('AnswerPanel', () => {
  it('renders "Søren says" if answerText is provided', async () => {
    const answerText = 'This is the answer text.'

    render(AnswerPanel, {
      props: {
        answerText,
      },
    })

    await expect(screen.findByText(answerText)).resolves.toBeDefined()
  })

  it('renders answer text if answerText is provided', async () => {
    const answerText = 'This is the answer text.'

    render(AnswerPanel, {
      props: {
        answerText,
      },
    })

    await expect(screen.findByText('Søren says:')).resolves.toBeDefined()
  })

  it('does not render answer text when answerText is null', async () => {
    // Render the component with null answerText
    render(AnswerPanel, {
      props: {
        answerText: null,
      },
    })

    const element = screen.getByTestId('answer-panel')

    expect(element.textContent).toBe('')
  })
})
