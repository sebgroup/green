import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-robot')
export class IconRobot extends GdsIcon {
  static _regularSVG = `<path d="M12 2.75V4.75M3 8.75H2.25V11.25H3M21 11.25H21.75V8.75H21M9.75 14.5H14.25M9.25 10C9.25 10.4142 8.91421 10.75 8.5 10.75C8.08579 10.75 7.75 10.4142 7.75 10C7.75 9.58579 8.08579 9.25 8.5 9.25C8.91421 9.25 9.25 9.58579 9.25 10ZM16.25 10C16.25 10.4142 15.9142 10.75 15.5 10.75C15.0858 10.75 14.75 10.4142 14.75 10C14.75 9.58579 15.0858 9.25 15.5 9.25C15.9142 9.25 16.25 9.58579 16.25 10ZM3.25 4.75H20.75V16.25C20.75 17.9069 19.4069 19.25 17.75 19.25H6.25C4.59315 19.25 3.25 17.9069 3.25 16.25V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75V4H20.75C21.1642 4 21.5 4.33579 21.5 4.75V8H21.75C22.1642 8 22.5 8.33579 22.5 8.75V11.25C22.5 11.6642 22.1642 12 21.75 12H21.5V16.25C21.5 18.3211 19.8211 20 17.75 20H6.25C4.17893 20 2.5 18.3211 2.5 16.25V12H2.25C1.83579 12 1.5 11.6642 1.5 11.25V8.75C1.5 8.33579 1.83579 8 2.25 8H2.5V4.75C2.5 4.33579 2.83579 4 3.25 4H11.25V2.75C11.25 2.33579 11.5858 2 12 2ZM7 10C7 9.17157 7.67157 8.5 8.5 8.5C9.32843 8.5 10 9.17157 10 10C10 10.8284 9.32843 11.5 8.5 11.5C7.67157 11.5 7 10.8284 7 10ZM14 10C14 9.17157 14.6716 8.5 15.5 8.5C16.3284 8.5 17 9.17157 17 10C17 10.8284 16.3284 11.5 15.5 11.5C14.6716 11.5 14 10.8284 14 10ZM9 14.5C9 14.0858 9.33579 13.75 9.75 13.75H14.25C14.6642 13.75 15 14.0858 15 14.5C15 14.9142 14.6642 15.25 14.25 15.25H9.75C9.33579 15.25 9 14.9142 9 14.5Z" fill="currentColor"/>`
}