import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-archive')
export class IconArchive extends GdsIcon {
  static _regularSVG = `<path d="M20.25 7.75H21C21 7.33579 20.6642 7 20.25 7V7.75ZM20.25 20.25V21C20.6642 21 21 20.6642 21 20.25H20.25ZM3.75 20.25H3C3 20.6642 3.33579 21 3.75 21V20.25ZM3.75 7.75V7C3.33579 7 3 7.33579 3 7.75H3.75ZM2.75 3.75V3C2.33579 3 2 3.33579 2 3.75H2.75ZM21.25 3.75H22C22 3.33579 21.6642 3 21.25 3V3.75ZM21.25 7.75V8.5C21.6642 8.5 22 8.16421 22 7.75H21.25ZM2.75 7.75H2C2 8.16421 2.33579 8.5 2.75 8.5V7.75ZM10 11C9.58579 11 9.25 11.3358 9.25 11.75C9.25 12.1642 9.58579 12.5 10 12.5V11ZM14 12.5C14.4142 12.5 14.75 12.1642 14.75 11.75C14.75 11.3358 14.4142 11 14 11V12.5ZM19.5 7.75V20.25H21V7.75H19.5ZM20.25 19.5H3.75V21H20.25V19.5ZM4.5 20.25V7.75H3V20.25H4.5ZM3.75 8.5H20.25V7H3.75V8.5ZM2.75 4.5H21.25V3H2.75V4.5ZM20.5 3.75V7.75H22V3.75H20.5ZM21.25 7H2.75V8.5H21.25V7ZM3.5 7.75V3.75H2V7.75H3.5ZM10 12.5H14V11H10V12.5Z" fill="currentColor"/>`

  static _solidSVG = `
<path d="M2.75 3C2.33579 3 2 3.33579 2 3.75V6.25C2 6.66421 2.33579 7 2.75 7H21.25C21.6642 7 22 6.66421 22 6.25V3.75C22 3.33579 21.6642 3 21.25 3H2.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 20.25V8.5H21V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25ZM10 11C9.58579 11 9.25 11.3358 9.25 11.75C9.25 12.1642 9.58579 12.5 10 12.5H14C14.4142 12.5 14.75 12.1642 14.75 11.75C14.75 11.3358 14.4142 11 14 11H10Z" fill="currentColor"/>

`
}
