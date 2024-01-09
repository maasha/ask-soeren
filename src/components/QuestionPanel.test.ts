import { fireEvent, render, screen } from '@testing-library/vue'
import QuestionPanelVue from './QuestionPanel.vue'

describe('QuestionPanel', () => {
  describe('the question field', () => {
    it('should have a label', () => {
      render(QuestionPanelVue)
      expect(screen.getByLabelText('Post your question')).toBeDefined()
    })

    it('should have a text input', () => {
      render(QuestionPanelVue)
      const element = screen.getByTestId('question-input')

      expect(element).toBeInstanceOf(HTMLInputElement)
    })

    it('should have a input field placeholder', () => {
      render(QuestionPanelVue)
      expect(screen.findByPlaceholderText('here...')).toBeDefined()
    })
  })

  describe('the answer style selector', () => {
    it('should have a label', () => {
      render(QuestionPanelVue)
      expect(screen.getByLabelText('Select answer style:')).toBeDefined()
    })

    it('should have a select input', () => {
      render(QuestionPanelVue)
      const element = screen.getByTestId('style-select')
      expect(element).toBeInstanceOf(HTMLSelectElement)
    })

    it('should have specific options', () => {
      render(QuestionPanelVue)
      const legalese = screen.getByText('Legalese')
      const british = screen.getByText('British High Class')
      const gangsta = screen.getByText('New York Gangsta')

      expect(legalese).toBeDefined()
      expect(british).toBeDefined()
      expect(gangsta).toBeDefined()
    })

    it('should have a default option', () => {
      render(QuestionPanelVue)
      const element = screen.getByTestId('style-select') as HTMLSelectElement

      expect(element.value).toBe('legalese')
    })

    it('should be possible to change the option', async () => {
      render(QuestionPanelVue)
      const element = screen.getByTestId('style-select') as HTMLSelectElement

      await fireEvent.change(element, { target: { value: 'british' } })

      expect(element.value).toBe('british')
    })
  })
})
