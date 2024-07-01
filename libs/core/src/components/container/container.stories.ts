import type { Meta, StoryObj } from '@storybook/web-components'
import '../card'
import { html } from 'lit'

/**
 * The `gds-container` component is a container element that can be used to wrap other components.
 *
 * ## Usage
 *
 */
const meta: Meta = {
  title: 'Docs/Layout/Container',
  component: 'gds-container',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

/**
 * Container
 */

export const Card: Story = {
  ...DefaultParams,
  name: 'Container',
  render: (args) => html` <gds-container> Container </gds-container>`,
}