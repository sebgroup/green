import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-heart')
export class IconHeart extends GdsIcon {
  static _regularSVG = `
<path d="M12 5.57193C18.3331 -0.86765 29.1898 11.0916 12 20.75C-5.18982 11.0916 5.66687 -0.867651 12 5.57193Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path d="M12.3674 21.404C21.0871 16.5047 23.0862 10.7671 21.5174 6.84578C20.7503 4.92821 19.1426 3.55922 17.2527 3.1368C15.5343 2.75271 13.6399 3.16312 12 4.54956C10.3601 3.16312 8.46571 2.75271 6.74729 3.13681C4.85742 3.55922 3.2497 4.92822 2.48255 6.8458C0.913758 10.7672 2.91289 16.5047 11.6327 21.404C11.8608 21.5322 12.1393 21.5322 12.3674 21.404Z" fill="currentColor"/>

`
}