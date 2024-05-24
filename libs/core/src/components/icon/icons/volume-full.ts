import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-volume-full
 */
@gdsCustomElement('gds-icon-volume-full')
export class IconVolumeFull extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M19.2478 4.75195C21.1027 6.60684 22.25 9.16934 22.25 11.9998C22.25 14.8303 21.1027 17.3928 19.2478 19.2476M15.8891 8.11133C16.8844 9.10663 17.5 10.4816 17.5 12.0004C17.5 13.5192 16.8844 14.8942 15.8891 15.8895M1.75 7.75H6L12.25 3.75V20.25L6 16.25H1.75V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M13 3.75C13 3.47592 12.8505 3.22366 12.6101 3.09208C12.3696 2.9605 12.0766 2.97055 11.8457 3.1183L5.78055 7H1.75C1.33579 7 1 7.33579 1 7.75V16.25C1 16.6642 1.33579 17 1.75 17H5.78055L11.8457 20.8817C12.0766 21.0294 12.3696 21.0395 12.6101 20.9079C12.8505 20.7763 13 20.5241 13 20.25V3.75Z" fill="currentColor"/><path d="M18.7175 4.22162C19.0104 3.92873 19.4852 3.92873 19.7781 4.22162C21.7679 6.21141 23 8.96244 23 11.9998C23 15.0372 21.7679 17.7882 19.7781 19.778C19.4852 20.0709 19.0104 20.0709 18.7175 19.778C18.4246 19.4851 18.4246 19.0102 18.7175 18.7173C20.4375 16.9973 21.5 14.6234 21.5 11.9998C21.5 9.37624 20.4375 7.00227 18.7175 5.28228C18.4246 4.98939 18.4246 4.51452 18.7175 4.22162Z" fill="currentColor"/><path d="M16.4194 7.581C16.1265 7.28811 15.6516 7.28811 15.3587 7.581C15.0658 7.87389 15.0658 8.34876 15.3587 8.64166C16.2191 9.50206 16.75 10.6885 16.75 12.0004C16.75 13.3123 16.2191 14.4988 15.3587 15.3592C15.0658 15.6521 15.0658 16.1269 15.3587 16.4198C15.6516 16.7127 16.1265 16.7127 16.4194 16.4198C17.5496 15.2896 18.25 13.7261 18.25 12.0004C18.25 10.2747 17.5496 8.7112 16.4194 7.581Z" fill="currentColor"/>`
  /** @private */
  static _name = 'volume full'
}