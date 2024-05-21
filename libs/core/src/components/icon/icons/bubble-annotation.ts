import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-bubble-annotation')
export class IconBubbleAnnotation extends GdsIcon {
  static _regularSVG = `
<path d="M2.7522 3.75H21.2522V18.25H12.0022L7.0022 21V18.25H2.7522V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M6.75 11C6.75 11.4142 7.08579 11.75 7.5 11.75C7.91421 11.75 8.25 11.4142 8.25 11C8.25 10.5858 7.91421 10.25 7.5 10.25C7.08579 10.25 6.75 10.5858 6.75 11ZM11.25 11C11.25 11.4142 11.5858 11.75 12 11.75C12.4142 11.75 12.75 11.4142 12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11ZM15.75 11C15.75 11.4142 16.0858 11.75 16.5 11.75C16.9142 11.75 17.25 11.4142 17.25 11C17.25 10.5858 16.9142 10.25 16.5 10.25C16.0858 10.25 15.75 10.5858 15.75 11Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="square"/>

`
  static _solidSVG = ``
}