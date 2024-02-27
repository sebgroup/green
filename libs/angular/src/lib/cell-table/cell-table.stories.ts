import { Meta, moduleMetadata, Story } from '@storybook/angular'

import { NggCellTableComponent } from './cell-table.component'
import { NggCellTableModule } from './cell-table.module'
import Documentation from './documentation.mdx'
const tmp = [
  {
    rowId: 0,
    FullName:
      "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>ABB Ltd</span></a>",
    PreLastTradedAt: 397.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
  {
    rowId: 1,
    FullName:
      "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>H&M</span></a>",
    PreLastTradedAt: 200.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
  {
    rowId: 2,
    FullName:
      "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>SBB</span></a>",
    PreLastTradedAt: 100.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
]

export default {
  title: 'Components/Cell Table',
  component: NggCellTableComponent,
  decorators: [
    moduleMetadata({
      imports: [NggCellTableModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['components-cell-table'],
  },
  argTypes: {
    rows: { control: 'object' },
    headerList: { control: 'object' },
    className: { control: 'string' },
    arrow: { control: 'boolean' },
  },
} as Meta<NggCellTableComponent>

const Template: Story<NggCellTableComponent> = (
  args: NggCellTableComponent
) => {
  return {
    template: `
      <ngg-cell-table [rows]="rows" [headerList]="headerList" [className]="className">
      </ngg-cell-table>
    `,
    props: args,
  }
}

export const Default = Template.bind({})
Default.args = {
  rows: tmp,
  className: 'cell-table-container d-block stacked-stock-list stacked-indent',
  headerList: [
    {
      tableKeySelector: 'FullName',
      label: 'Namn',
      valueType: 'custom-html',
      main: true,
    },
    {
      tableKeySelector: 'PreLastTradedAt',
      label: 'Senast',
      valueType: 'streamSign',
    },
    {
      tableKeySelector: 'ChangePercent',
      label: 'Utv. %',
      valueType: 'sign',
    },
    {
      tableKeySelector: 'Change',
      label: 'Utv. (SEK)',
      valueType: 'sign',
    },
  ],
  clickableRows: true,
}
