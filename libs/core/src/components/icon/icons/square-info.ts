import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-square-info')
export class IconSquareInfo extends GdsIcon {
  static _regularSVG = `
<path d="M20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM10.75 10.25C10.3358 10.25 10 10.5858 10 11C10 11.4142 10.3358 11.75 10.75 11.75V10.25ZM12 11L12.75 11C12.75 10.5858 12.4142 10.25 12 10.25V11ZM11.25 16.25C11.25 16.6642 11.5858 17 12 17C12.4142 17 12.75 16.6642 12.75 16.25L11.25 16.25ZM19.5 3.75V20.25H21V3.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V3.75H3V20.25H4.5ZM3.75 4.5H20.25V3H3.75V4.5ZM10.75 11.75H12V10.25H10.75V11.75ZM11.25 11L11.25 16.25L12.75 16.25L12.75 11L11.25 11Z" fill="currentColor"/>
<path d="M12 7.375C11.6548 7.375 11.375 7.65482 11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>

`
  static _solidSVG = `
<path d="M20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM10.75 10.25C10.3358 10.25 10 10.5858 10 11C10 11.4142 10.3358 11.75 10.75 11.75V10.25ZM12 11L12.75 11C12.75 10.5858 12.4142 10.25 12 10.25V11ZM11.25 16.25C11.25 16.6642 11.5858 17 12 17C12.4142 17 12.75 16.6642 12.75 16.25L11.25 16.25ZM19.5 3.75V20.25H21V3.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V3.75H3V20.25H4.5ZM3.75 4.5H20.25V3H3.75V4.5ZM10.75 11.75H12V10.25H10.75V11.75ZM11.25 11L11.25 16.25L12.75 16.25L12.75 11L11.25 11Z" fill="currentColor"/>
<path d="M12 7.375C11.6548 7.375 11.375 7.65482 11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>

`
}