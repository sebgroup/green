import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-arrow-rotate-left-right')
export class IconArrowRotateLeftRight extends GdsIcon {
  static _regularSVG = `
<path d="M19.2618 20.25V16.25H15.2618M4.75 3.75V7.75H8.75M3.81383 10.9688C3.7717 11.3066 3.75 11.6508 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C14.6766 20.25 17.1111 18.9754 18.6322 17M20.1862 13.0312C20.2283 12.6934 20.25 12.3492 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C9.32342 3.75 6.88887 5.02463 5.36784 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path d="M19.2618 20.25V16.25H15.2618M4.75 3.75V7.75H8.75M3.81383 10.9688C3.7717 11.3066 3.75 11.6508 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C14.6766 20.25 17.1111 18.9754 18.6322 17M20.1862 13.0312C20.2283 12.6934 20.25 12.3492 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C9.32342 3.75 6.88887 5.02463 5.36784 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
}