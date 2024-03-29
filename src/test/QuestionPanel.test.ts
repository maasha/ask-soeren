import { describe, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import QuestionPanel from '../components/QuestionPanel.vue'

describe('QuestionPanel', () => {
  describe('the question field', () => {
    it('should have a label', () => {
      render(QuestionPanel)
      expect(screen.getByLabelText('Post your question')).toBeDefined()
    })

    it('should have a text input', () => {
      render(QuestionPanel)
      const element = screen.getByTestId('question-input')

      expect(element).toBeInstanceOf(HTMLInputElement)
    })

    it('should have a input field placeholder', () => {
      render(QuestionPanel)
      expect(screen.findByPlaceholderText('here...')).toBeDefined()
    })
  })

  describe('the answer style selector', () => {
    it('should have a label', () => {
      render(QuestionPanel)
      expect(screen.getByLabelText('Select answer style:')).toBeDefined()
    })

    it('should have a select input', () => {
      render(QuestionPanel)
      const element = screen.getByTestId('style-select')
      expect(element).toBeInstanceOf(HTMLSelectElement)
    })

    it('should have specific options', () => {
      render(QuestionPanel)
      const legalese = screen.getByText('Legalese')
      const british = screen.getByText('British High Class')
      const gangsta = screen.getByText('New York Gangsta')

      expect(legalese).toBeDefined()
      expect(british).toBeDefined()
      expect(gangsta).toBeDefined()
    })

    it('should have a default option', () => {
      render(QuestionPanel)
      const element = screen.getByTestId('style-select')

      expect((element as HTMLSelectElement).value).toBe('legalese')
    })

    it('should be possible to change the option', async () => {
      render(QuestionPanel)
      const element = screen.getByTestId('style-select')

      await fireEvent.change(element, { target: { value: 'british' } })

      expect((element as HTMLSelectElement).value).toBe('british')
    })
  })

  describe('the submit button', () => {
    it('should have a button to submit the form', () => {
      render(QuestionPanel)
      const element = screen.getByTestId('submit-button')

      expect(element).toBeInstanceOf(HTMLButtonElement)
    })

    it('should have button correct button text', () => {
      render(QuestionPanel)
      const element = screen.getByTestId('submit-button')

      expect(element.textContent?.trim()).toBe('Ask Søren')
    })

    it('emits form data when submitted with a valid question', async () => {
      const wrapper = mount(QuestionPanel)

      ;(wrapper.vm as unknown as any).questionText = 'Test Question'
      ;(wrapper.vm as unknown as any).selectedStyle = 'legalese'

      await wrapper.find('form').trigger('submit.prevent')
      await wrapper.vm.$nextTick()

      const formData = wrapper.emitted('form-data') ?? []

      expect(formData).toBeTruthy()

      expect(formData[0][0]).toEqual({
        questionText: 'Test Question',
        selectedStyle: 'legalese',
      })
    })

    it('does not emit form data when submitted with an invalid question', async () => {
      const wrapper = mount(QuestionPanel)

      ;(wrapper.vm as unknown as any).questionText = ''
      ;(wrapper.vm as unknown as any).selectedStyle = 'legalese'

      await wrapper.find('form').trigger('submit.prevent')
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('form-data')).toBeFalsy()
    })
  })
})
