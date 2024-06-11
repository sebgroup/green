import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/card/index.js'
import '../../../../../dist/libs/core/src/components/container/index.js'
import '../../../../../dist/libs/core/src/components/grid/index.js'
import '../../../../../dist/libs/core/src/components/button/index.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-down.js'
import '../../../../../dist/libs/core/src/components/icon/icons/arrow-right.js'
import { html } from 'lit'

/**
 * The `gds-card`
 *
 * ## Usage
 *
 */
const meta: Meta = {
  title: 'Components/Card',
  component: 'gds-card',
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
  argTypes: {
    padding: {
      control: {
        type: 'object',
        value: { l: '{xs}', m: '{xs}', s: '{xs}' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
    gap: {
      control: {
        type: 'object',
        value: { l: '2xl', m: 'l', s: 'xs' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
    'row-gap': {
      control: {
        type: 'object',
        value: { l: '2xl', m: 'l', s: 'xs' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
    shadow: {
      control: {
        type: 'object',
        value: { l: '2xl', m: 'l', s: 'xs' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
    border: {
      control: {
        type: 'object',
        value: { l: '2xl', m: 'l', s: 'xs' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
    radius: {
      control: {
        type: 'object',
        value: { l: '2xl', m: 'l', s: 'xs' },
        options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
      },
    },
  },
}

/**
 * Card
 */

export const Card: Story = {
  ...DefaultParams,
  name: 'Basic Card',
  render: (args) =>
    html` <gds-card shadow="l:m m:m s:m" radius="l:xs m:xs s:xs">
      <gds-container
        padding="s{xs} m{l} l{2xl}"
        display="flex"
        align="center"
        justify="center"
        gap="xl"
      >
        <span>Default</span> <gds-icon-arrow-down></gds-icon-arrow-down>

        <gds-button>
          Button
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-button>
      </gds-container>
    </gds-card>`,
}

export const CardBorder: Story = {
  ...DefaultParams,
  name: 'Border Style',
  render: (args) => html` <gds-card> Border Style </gds-card>`,
}

export const CardRadius: Story = {
  ...DefaultParams,
  name: 'Border Radius',
  render: (args) =>
    html` <gds-card radius="l:2xl m:2xl s:2xl"> Border Radius </gds-card>`,
}

export const Cardshadow: Story = {
  ...DefaultParams,
  name: 'shadow',
  render: (args) =>
    html`<gds-grid columns="5" gap="xl">
      <gds-card shadow="l:xs m:xs s:xs" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="l:s m:s s:s" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="l:m m:m s:m" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="l:l m:l s:l" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="l:xl m:xl s:xl" radius="l:s m:s s:s">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>`,
}

export const CardBackground: Story = {
  ...DefaultParams,
  name: 'Background',
  render: (args) =>
    html` <gds-card background="grey-70"> Background </gds-card>`,
}

export const CardGrid: Story = {
  ...DefaultParams,
  name: 'Using with Grid',
  render: (args) =>
    html` <gds-grid columns="4">
      <gds-container column="2 / -1">
        <gds-card shadow="l:xl m:xl s:xl" radius="l:2xl m:2xl s:2xl">
          <gds-container
            padding="s{xs} m{l} l{2xl}"
            display="flex"
            align="center"
            justify="center"
            gap="2xl"
            row-gap="2xl"
            direction="column"
          >
            <div>Example One</div>
            <div>Example Two</div>
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`,
}