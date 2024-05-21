import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-search-menu')
export class IconSearchMenu extends GdsIcon {
  static _regularSVG = `
<path d="M2.75 12H5.25M2.75 6.75H6.25M2.75 17.25H6.25M19.5 16.5L22.25 19.25M21.25 12C21.25 15.4518 18.4518 18.25 15 18.25C11.5482 18.25 8.75 15.4518 8.75 12C8.75 8.54822 11.5482 5.75 15 5.75C18.4518 5.75 21.25 8.54822 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}