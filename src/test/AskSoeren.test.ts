import { render, screen } from '@testing-library/vue'
import { describe, it } from 'vitest'
import AskSoeren from '../components/AskSoeren.vue'

describe('AskSoeren', () => {
  it('should have correct title', () => {
    render(AskSoeren)

    const element = screen.getByTestId('title')
    expect(element.textContent).toBe('Ask Søren')
  })

  it('should have correct subtitle', () => {
    render(AskSoeren)

    const element = screen.getByTestId('subtitle')
    expect(element.textContent).toBe('(... about Pharma & IT)')
  })

  it('should contain a QuestionPanel component', () => {
    render(AskSoeren)

    const element = screen.getByTestId('question-panel')
    expect(element).toBeTruthy()
  })

  it('should contain an AnswerPanel component', () => {
    render(AskSoeren)

    const element = screen.getByTestId('answer-panel')
    expect(element).toBeTruthy()
  })

  it('should contain an AvatarPanel component', () => {
    render(AskSoeren)

    const element = screen.getByTestId('avatar-panel')
    expect(element).toBeTruthy()
  })
})
