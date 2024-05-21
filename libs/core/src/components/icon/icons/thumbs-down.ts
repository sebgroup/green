import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-thumbs-down')
export class IconThumbsDown extends GdsIcon {
  static _regularSVG = `
<path d="M17.2521 13.25H21.25V3.75H17.2521M17.2521 3.75V13L13.0043 21.25H12.389C11.1622 21.25 10.2249 20.1546 10.4139 18.9419L10.9892 15.25H5.74908C3.91335 15.25 2.50859 13.6144 2.78476 11.7987L3.62128 6.29867C3.84421 4.83298 5.1038 3.75 6.5856 3.75H17.2521Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}