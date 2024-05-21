import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-percent')
export class IconPercent extends GdsIcon {
  static _regularSVG = `
<path d="M16 8L8 16M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9Z" fill="#353531" stroke="#353531" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 15C14.25 15.4142 14.5858 15.75 15 15.75C15.4142 15.75 15.75 15.4142 15.75 15C15.75 14.5858 15.4142 14.25 15 14.25C14.5858 14.25 14.25 14.5858 14.25 15Z" fill="#353531" stroke="#353531" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}