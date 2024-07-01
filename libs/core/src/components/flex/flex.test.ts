import { expect, fixture, html as testingHtml } from '@open-wc/testing'
import '@sebgroup/green-core/components/card'
import type { GdsCard } from '@sebgroup/green-core/components/card'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

const html = htmlTemplateTagFactory(testingHtml)

describe('GdsFlex', () => {
  let element: GdsCard
  beforeEach(async () => {
    element = await fixture(html`<gds-flex></gds-flex>`)
    await element.updateComplete
  })
})