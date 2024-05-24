import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-tennis
 */
@gdsCustomElement('gds-icon-tennis')
export class IconTennis extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M6 4.9597C7.98887 6.65632 9.25 9.18088 9.25 12C9.25 14.8191 7.98887 17.3437 6 19.0403M6 4.9597C4.01113 6.65632 2.75 9.18088 2.75 12C2.75 14.8191 4.01113 17.3437 6 19.0403M6 4.9597C7.61524 3.58181 9.71048 2.75 12 2.75C14.2895 2.75 16.3848 3.58181 18 4.9597M6 19.0403C7.61524 20.4182 9.71048 21.25 12 21.25C14.2895 21.25 16.3848 20.4182 18 19.0403M18 4.9597C16.0111 6.65632 14.75 9.18088 14.75 12C14.75 14.8191 16.0111 17.3437 18 19.0403M18 4.9597C19.9889 6.65632 21.25 9.18088 21.25 12C21.25 14.8191 19.9889 17.3437 18 19.0403" stroke="currentColor" stroke-width="1.5"/>`
  /** @private */
  static _solidSVG = `<path d="M2 12C2 9.28189 3.08445 6.81707 4.84428 5.0146C7.05362 6.54963 8.5 9.10591 8.5 12C8.5 14.8941 7.05362 17.4504 4.84428 18.9854C3.08445 17.1829 2 14.7181 2 12Z" fill="currentColor"/><path d="M10 12C10 8.72836 8.42889 5.82368 6 3.99927C7.67132 2.74389 9.74879 2 12 2C14.2512 2 16.3287 2.74389 18 3.99927C15.5711 5.82368 14 8.72837 14 12C14 15.2716 15.5711 18.1763 18 20.0007C16.3287 21.2561 14.2512 22 12 22C9.74879 22 7.67132 21.2561 6 20.0007C8.42889 18.1763 10 15.2716 10 12Z" fill="currentColor"/><path d="M19.1557 5.0146C20.9156 6.81707 22 9.28189 22 12C22 14.7181 20.9156 17.1829 19.1557 18.9854C16.9464 17.4504 15.5 14.8941 15.5 12C15.5 9.10591 16.9464 6.54963 19.1557 5.0146Z" fill="currentColor"/>`
  /** @private */
  static _name = 'tennis'
}