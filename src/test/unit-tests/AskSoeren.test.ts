import { render, screen } from '@testing-library/vue'
import AskSoeren from '../../components/AskSoeren.vue'

describe('AskSoeren', () => {
  test('should have correct title', () => {
    render(AskSoeren)

    const element = screen.getByTestId('title')
    expect(element.textContent).toBe('Ask Søren')
  })

  test('should have correct subtitle', () => {
    render(AskSoeren)

    const element = screen.getByTestId('subtitle')
    expect(element.textContent).toBe('(... about Pharma & IT)')
  })

  test('should contain a QuestionPanel component', () => {
    render(AskSoeren)

    const element = screen.getByTestId('question-panel')
    expect(element).toBeTruthy()
  })

  test('should contain an AnswerPanel component', () => {
    render(AskSoeren)

    const element = screen.getByTestId('answer-panel')
    expect(element).toBeTruthy()
  })

  test('should contain an AvatarPanel component', () => {
    render(AskSoeren)

    const element = screen.getByTestId('avatar-panel')
    expect(element).toBeTruthy()
  })
})
