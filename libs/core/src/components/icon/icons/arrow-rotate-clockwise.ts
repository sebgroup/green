import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-arrow-rotate-clockwise')
export class IconArrowRotateClockwise extends GdsIcon {
  static _regularSVG = `
<path d="M19.7596 14.75C18.627 17.9543 15.5711 20.25 11.979 20.25C7.42266 20.25 3.729 16.5563 3.729 12C3.729 7.44365 7.42266 3.75 11.979 3.75C14.7962 3.75 16.6791 4.95438 18.5 7.00891M19.25 4V8H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}