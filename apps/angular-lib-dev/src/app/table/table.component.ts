import { Component } from '@angular/core'

@Component({
  templateUrl: './table.component.html',
})
export class TableComponent {
  rows = [
    {
      rowId: 0,
      FullName:
        "<a class='ps-3' href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt='country flag'><span>ABB Ltd</span></a>",
      PreLastTradedAt: 397.3,
      ChangePercent: '−1,39%',
      Change: 5,
    },
    {
      rowId: 1,
      FullName:
        "<a class='ps-3' href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt='country flag'><span>H&M</span></a>",
      PreLastTradedAt: 200.3,
      ChangePercent: '−1,39%',
      Change: 5,
    },
    {
      rowId: 2,
      FullName:
        "<a class='ps-3' href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt='country flag'><span>SBB</span></a>",
      PreLastTradedAt: 100.3,
      ChangePercent: '−1,39%',
      Change: 5,
    },
  ]

  headerList: any = [
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
  ]

  className = 'cell-table-container d-block stacked-stock-list stacked-indent'

  arrow = true
}
