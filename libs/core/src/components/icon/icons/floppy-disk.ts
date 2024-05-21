import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-floppy-disk')
export class IconFloppyDisk extends GdsIcon {
  static _regularSVG = `
<path d="M8.75 4V8.25H15.25V4M3.75 3.75V20.25H20.25V6.75L17.25 3.75H3.75ZM15.25 14.25C15.25 16.0449 13.7949 17.5 12 17.5C10.2051 17.5 8.75 16.0449 8.75 14.25C8.75 12.4551 10.2051 11 12 11C13.7949 11 15.25 12.4551 15.25 14.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}