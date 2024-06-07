import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-map-pin
 */
@gdsCustomElement('gds-icon-map-pin')
export class IconMapPin extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M14.75 10C14.75 11.5188 13.5188 12.75 12 12.75C10.4812 12.75 9.25 11.5188 9.25 10C9.25 8.48122 10.4812 7.25 12 7.25C13.5188 7.25 14.75 8.48122 14.75 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M19.25 10C19.25 16.0755 12 21.3929 12 21.3929C12 21.3929 4.75 16.0755 4.75 10C4.75 5.99594 7.99594 2.75 12 2.75C16.0041 2.75 19.25 5.99594 19.25 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.556 21.9973L11.5538 21.9957L11.5486 21.9918L11.5304 21.9783C11.5149 21.9667 11.4927 21.95 11.4643 21.9284C11.4074 21.8851 11.3256 21.822 11.2224 21.7401C11.016 21.5764 10.7236 21.3374 10.3739 21.0321C9.67555 20.4223 8.74308 19.5433 7.80853 18.4663C5.96419 16.3408 4 13.3169 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 13.3169 18.0358 16.3408 16.1915 18.4663C15.2569 19.5433 14.3245 20.4223 13.6261 21.0321C13.2764 21.3374 12.984 21.5764 12.7776 21.7401C12.6744 21.822 12.5926 21.8851 12.5357 21.9284C12.5073 21.95 12.4851 21.9667 12.4696 21.9783L12.4514 21.9918L12.4462 21.9957L12.4445 21.9969C12.4445 21.9969 12.4436 21.9976 12 21.3929L12.4436 21.9976C12.1796 22.1913 11.82 22.191 11.556 21.9973ZM12 21.3929L11.556 21.9973C11.556 21.9973 11.5564 21.9976 12 21.3929ZM8.875 10C8.875 8.27411 10.2741 6.875 12 6.875C13.7259 6.875 15.125 8.27411 15.125 10C15.125 11.7259 13.7259 13.125 12 13.125C10.2741 13.125 8.875 11.7259 8.875 10Z" fill="currentColor"/>`
  /** @private */
  static _name = 'map pin'
}