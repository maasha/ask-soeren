import { render } from '@testing-library/vue'

import AvatarPanel from '../../components/AvatarPanel.vue'

describe('AvatarPanel', async () => {
  test('should match snapshot', () => {
    const renderResult = render(AvatarPanel)
    expect(renderResult).toMatchSnapshot()
  })
})
