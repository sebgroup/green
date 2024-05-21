import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-line-chart')
export class IconLineChart extends GdsIcon {
  static _regularSVG = `
<path d="M9.25 10.75V16.25M14.25 4.75V16.25M19.25 12.75V16.25M3.75 3.75V20.25H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}