import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-rocket')
export class IconRocket extends GdsIcon {
  static _regularSVG = `
<path d="M6.86111 13.25H3.25L6.25 7.75H11.2292M6.86111 13.25L10.75 17.1389M6.86111 13.25L11.2292 7.75M10.75 17.1389V20.75L16.25 17.75V12.7708M10.75 17.1389L16.25 12.7708M16.25 12.7708C19.3333 9.94444 21.25 6.86111 21.25 2.75C17.1389 2.75 14.0556 4.66667 11.2292 7.75M4.80556 21.25H2.75V19.1944C2.75 18.0592 3.6703 17.1389 4.80556 17.1389C5.94081 17.1389 6.86111 18.0592 6.86111 19.1944C6.86111 20.3297 5.94081 21.25 4.80556 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14.3242L11.5 17.501V19.4866L15.5 17.3048V14.3242ZM10 17.4495L6.55045 14H3.25C2.9853 14 2.7402 13.8605 2.60508 13.6328C2.46995 13.4052 2.46482 13.1232 2.59158 12.8909L5.59158 7.39086C5.723 7.14992 5.97554 7 6.25 7H10.902C13.7571 3.96176 16.9703 2 21.25 2C21.6642 2 22 2.33579 22 2.75C22 7.02966 20.0382 10.2429 17 13.098V17.75C17 18.0245 16.8501 18.277 16.6091 18.4084L11.1091 21.4084C10.8768 21.5352 10.5948 21.53 10.3672 21.3949C10.1395 21.2598 10 21.0147 10 20.75V17.4495ZM6.499 12.5L9.67577 8.5H6.69522L4.51341 12.5H6.499ZM2 19.1944C2 17.645 3.25609 16.3889 4.80556 16.3889C6.35502 16.3889 7.61111 17.645 7.61111 19.1944C7.61111 20.7439 6.35502 22 4.80556 22H2.75C2.33579 22 2 21.6642 2 21.25V19.1944Z" fill="currentColor"/>

`
}