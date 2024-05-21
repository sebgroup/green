import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-trash-can')
export class IconTrashCan extends GdsIcon {
  static _regularSVG = `
<path d="M5.75 5.75V21.25H18.25V5.75M5.75 5.75H18.25M5.75 5.75H3.75M18.25 5.75H20.25M14 10.75V16.25M10 10.75V16.25M9 5.75C9 4.09315 10.3431 2.75 12 2.75C13.6569 2.75 15 4.09315 15 5.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}