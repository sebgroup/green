import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-people-copy')
export class IconPeopleCopy extends GdsIcon {
  static _regularSVG = `
<path d="M17.25 6.75V2.75H2.75V17.25H6.75M9.32626 21.25C9.78713 18.9642 11.7046 17.25 14 17.25C16.2954 17.25 18.2129 18.9642 18.6737 21.25M9.32626 21.25H6.75V6.75H21.25V21.25H18.6737M9.32626 21.25H18.6737M16.25 12.5C16.25 13.7426 15.2426 14.75 14 14.75C12.7574 14.75 11.75 13.7426 11.75 12.5C11.75 11.2574 12.7574 10.25 14 10.25C15.2426 10.25 16.25 11.2574 16.25 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path d="M17.25 6.75V2.75H2.75V17.25H6.75M9.32626 21.25C9.78713 18.9642 11.7046 17.25 14 17.25C16.2954 17.25 18.2129 18.9642 18.6737 21.25M9.32626 21.25H6.75V6.75H21.25V21.25H18.6737M9.32626 21.25H18.6737M16.25 12.5C16.25 13.7426 15.2426 14.75 14 14.75C12.7574 14.75 11.75 13.7426 11.75 12.5C11.75 11.2574 12.7574 10.25 14 10.25C15.2426 10.25 16.25 11.2574 16.25 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>

`
}