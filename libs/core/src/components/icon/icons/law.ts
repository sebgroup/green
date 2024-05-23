import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-law')
export class IconLaw extends GdsIcon {
  static _regularSVG = `<path d="M12 2.75V20.25M12 20.25H6.75M12 20.25H17.25M2.75 5.75H8L10 4.75H14L16 5.75H21.25M5.5 5.75L2.5 15.25C4.57693 16.4267 6.42307 16.4267 8.5 15.25L5.5 5.75ZM18.5 5.75L15.5 15.25C17.5769 16.4267 19.4231 16.4267 21.5 15.25L18.5 5.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  static _solidSVG = `<path d="M12.7501 2.75C12.7501 2.33579 12.4143 2 12.0001 2C11.5859 2 11.2501 2.33579 11.2501 2.75V4H10.0001C9.88365 4 9.76882 4.02711 9.66468 4.07918L7.82304 5H2.75009C2.33587 5 2.00009 5.33579 2.00009 5.75C2.00009 6.16421 2.33587 6.5 2.75009 6.5H4.47674L1.7849 15.0242C1.67828 15.3618 1.82231 15.728 2.13038 15.9025C3.25339 16.5388 4.36077 16.8825 5.50009 16.8825C6.6394 16.8825 7.74678 16.5388 8.86979 15.9025C9.17786 15.728 9.3219 15.3618 9.21527 15.0242L6.52344 6.5H8.00009C8.11652 6.5 8.23135 6.47289 8.3355 6.42082L10.1771 5.5H11.2501V19.5H6.75009C6.33587 19.5 6.00009 19.8358 6.00009 20.25C6.00009 20.6642 6.33587 21 6.75009 21H17.2501C17.6643 21 18.0001 20.6642 18.0001 20.25C18.0001 19.8358 17.6643 19.5 17.2501 19.5H12.7501V5.5H13.823L15.6647 6.42082C15.7688 6.47289 15.8837 6.5 16.0001 6.5H17.4767L14.7849 15.0242C14.6783 15.3618 14.8223 15.728 15.1304 15.9025C16.2534 16.5388 17.3608 16.8825 18.5001 16.8825C19.6394 16.8825 20.7468 16.5388 21.8698 15.9025C22.1779 15.728 22.3219 15.3618 22.2153 15.0242L19.5234 6.5H21.2501C21.6643 6.5 22.0001 6.16421 22.0001 5.75C22.0001 5.33579 21.6643 5 21.2501 5H16.1771L14.3355 4.07918C14.2314 4.02711 14.1165 4 14.0001 4H12.7501V2.75Z" fill="currentColor"/>`
}