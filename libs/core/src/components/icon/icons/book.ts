import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-book')
export class IconBook extends GdsIcon {
  static _regularSVG = `
<path d="M19.25 12V16.75H7C5.75736 16.75 4.75 17.7574 4.75 19C4.75 20.2426 5.75736 21.25 7 21.25H10M8.75 7H15.25M8.75 11H12.25M6.75 2.75H19.25V21.25H6.75C5.64543 21.25 4.75 20.3546 4.75 19.25V4.75C4.75 3.64543 5.64543 2.75 6.75 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}