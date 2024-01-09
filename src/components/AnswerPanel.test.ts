import { render, screen } from '@testing-library/vue'

import AnswerPanel from './AnswerPanel.vue'

describe('AnswerPanel', async () => {
  it('should render', () => {
    render(AnswerPanel)
    expect(screen.getByText('Søren says:'))
  })
})
