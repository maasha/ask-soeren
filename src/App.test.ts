import { render, screen } from '@testing-library/vue'
import App from './App.vue'

describe('App', () => {
  test('should have correct title', () => {
    render(App)

    const element = screen.getByTestId('title')
    expect(element.textContent).toBe('Ask Søren')
  })

  test('should have correct subtitle', () => {
    render(App)

    const element = screen.getByTestId('subtitle')
    expect(element.textContent).toBe('(... about Pharma & IT)')
  })

  test('should contain a QuestionPanel component', () => {
    render(App)

    const element = screen.getByTestId('question-panel')
    expect(element).toBeTruthy()
  })

  test('should contain an AnswerPanel component', () => {
    render(App)

    const element = screen.getByTestId('answer-panel')
    expect(element).toBeTruthy()
  })

  test('should contain an AvatarPanel component', () => {
    render(App)

    const element = screen.getByTestId('avatar-panel')
    expect(element).toBeTruthy()
  })
})
