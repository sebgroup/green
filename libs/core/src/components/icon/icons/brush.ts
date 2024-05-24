import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-brush
 */
@gdsCustomElement('gds-icon-brush')
export class IconBrush extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M16.5 15.5L8.49997 7.5M13.1225 18.1222L13.5001 18.5001L21.5 10.5L19.5 8.5H17.5L17.5 6.5L13.5 2.5L5.50006 10.5003L5.87774 10.8776C7.05031 12.0489 7.05082 13.9492 5.87889 15.1212L2.50024 18.5001L5.50079 21.4995L8.87883 18.1213C10.0508 16.9492 11.9511 16.9497 13.1225 18.1222Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9695 1.96967C13.2624 1.67678 13.7373 1.67678 14.0302 1.96967L18.0302 5.96967C18.1708 6.11032 18.2499 6.30109 18.2499 6.5L18.2499 7.75L19.4999 7.75C19.6988 7.75 19.8895 7.82902 20.0302 7.96967L22.0302 9.96967C22.3231 10.2626 22.3231 10.7374 22.0302 11.0303L17.0303 16.0303C17.0283 16.0323 17.0263 16.0343 17.0242 16.0363L14.0302 19.0305C13.8895 19.1712 13.6986 19.2502 13.4996 19.2501C13.3007 19.2501 13.1099 19.171 12.9692 19.0302L12.5917 18.6524C11.7131 17.7729 10.2879 17.7726 9.40893 18.6517L6.03089 22.0299C5.73804 22.3228 5.26323 22.3228 4.97031 22.03L1.96977 19.0306C1.82907 18.8899 1.75002 18.6992 1.75 18.5002C1.74998 18.3013 1.82899 18.1105 1.96965 17.9698L5.3483 14.591C6.22725 13.712 6.22686 12.2867 5.34743 11.4082L4.96976 11.0309C4.82899 10.8903 4.74987 10.6995 4.74982 10.5005C4.74976 10.3016 4.82878 10.1107 4.96948 9.97001L7.96035 6.979C7.96338 6.97587 7.96643 6.97276 7.96952 6.96967L12.9695 1.96967ZM15.4393 15.5L8.49995 8.56075L6.55639 10.5044C7.8715 11.9768 7.82252 14.238 6.409 15.6516L3.56074 18.5L5.50043 20.439L8.34824 17.591C9.76186 16.1773 12.0233 16.1283 13.4957 17.4436L15.4393 15.5Z" fill="currentColor"/>`
  /** @private */
  static _name = 'brush'
}