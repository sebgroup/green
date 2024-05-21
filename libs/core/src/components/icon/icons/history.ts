import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-history')
export class IconHistory extends GdsIcon {
  static _regularSVG = `
<path d="M12 7.75V12L15.5 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.75 4.75V8.75H6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.25 15.0833C4.52169 18.676 7.95303 21.25 11.9864 21.25C17.1026 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1026 2.75 11.9864 2.75C8.14808 2.75 4.85497 5.08106 3.44947 8.40278" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path d="M12 7.75V12L15.5 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.75 4.75V8.75H6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.25 15.0833C4.52169 18.676 7.95303 21.25 11.9864 21.25C17.1026 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1026 2.75 11.9864 2.75C8.14808 2.75 4.85497 5.08106 3.44947 8.40278" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
}