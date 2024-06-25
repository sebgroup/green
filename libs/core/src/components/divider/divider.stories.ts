import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/divider/index.js'
import { html } from 'lit'

/**
 * The `gds-divider`
 *
 * ## Usage
 *
 */
const meta: Meta = {
  title: 'Components/Layouts/Divider',
  component: 'gds-divider',
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
  argTypes: {},
}

/**
 * Headings
 */

export const Divider: Story = {
  ...DefaultParams,
  name: 'Divider',
  render: (args) =>
    html` <gds-divider color="base400" size="2xl"></gds-divider>`,
}