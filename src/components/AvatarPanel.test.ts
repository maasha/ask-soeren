import { render } from '@testing-library/vue'

import AvatarPanel from './AvatarPanel.vue'

describe('AvatarPanel', async () => {
  it('should match snapshot', () => {
    const renderResult = render(AvatarPanel)
    expect(renderResult).toMatchSnapshot()
  })
})