import { setCustomElementsManifest } from '@storybook/web-components'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import DocTemplate from './DocTemplate.mdx'
import customElements from '../custom-elements.json'

import { registerTransitionalStyles } from '../src/transitional-styles.ts'

import './fonts.scss'

import '../src/components/theme/index.js'
import '../src/components/button/index.js'
import '../src/components/layout/grid/index.js'

setCustomElementsManifest(customElements)

export const globalTypes = {
  framework: {
    name: 'Change Framework',
    defaultValue: 'Web Components',
    toolbar: {
      icon: 'box',
      items: ['Web Components', 'React', 'Angular'],
      showName: true,
      dynamicTitle: true,
    },
  },
  style: {
    name: 'Change Style',
    defaultValue: '2023',
    toolbar: {
      icon: 'lightning',
      items: ['2016', '2023'],
      showName: true,
      dynamicTitle: true,
    },
  },
}

export default {
  parameters: {
    docs: {
      page: DocTemplate,
      transformSource: (source: any) => {
        const regexRes = source.match(/<gds-theme>([\s\S]*?)<\/gds-theme>/)
        return regexRes ? regexRes[1] : source
      },
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Docs',
          ['Components', 'Layout', 'Media', 'Content', 'Style'],
          'Concepts',
          ['Architecture'],
          'Contributing',
          ['Introduction'],
        ],
      },
    },
  },
  decorators: [
    (storyFn: any, context: any) => {
      // Initialize previousStyle if it doesn't exist
      if (typeof context.globals.previousStyle === 'undefined') {
        context.globals.previousStyle = '2023' // Default to 2023
      }

      const style = context.globals.style || '2023'

      if (style === '2016') {
        if (context.globals.previousStyle !== '2016') {
          // If switching to 2016 from a different style, register transitional styles
          registerTransitionalStyles()
        }
      } else {
        if (context.globals.previousStyle === '2016') {
          // If switching back to 2023 from 2016, force a refresh
          document.location.reload()
        }
        // Implement any additional logic needed for reverting to 2023 styles here
      }

      // Update previousStyle for the next render
      context.globals.previousStyle = style

      return html`<gds-theme>${storyFn()}</gds-theme>`
    },
  ],
}

@customElement('transitional-styles-toggle')
class TransitionalStylesToggle extends LitElement {
  protected createRenderRoot() {
    return this
  }
}
