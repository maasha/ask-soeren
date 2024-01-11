import { render } from '@testing-library/vue'
import { describe, it } from 'vitest'

import AvatarPanel from '../components/AvatarPanel.vue'

describe('AvatarPanel', async () => {
  it('should match snapshot', () => {
    const renderResult = render(AvatarPanel)
    expect(renderResult).toMatchSnapshot()
  })
})
