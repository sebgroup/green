import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-dollar')
export class IconDollar extends GdsIcon {
  static _regularSVG = `<path d="M12 7.375V6.34722M12 16.625V17.6528M14.2257 8.91667C13.7814 8.30226 12.9511 7.88889 12 7.88889H11.7145C10.4531 7.88889 9.43056 8.70694 9.43056 9.71605V9.79449C9.43056 10.5163 9.94031 11.1761 10.7473 11.4989L13.2527 12.5011C14.0597 12.8239 14.5694 13.4837 14.5694 14.2055C14.5694 15.2579 13.503 16.1111 12.1874 16.1111H12C11.0489 16.1111 10.2186 15.6977 9.7743 15.0833M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 5.59722C12.4142 5.59722 12.75 5.93301 12.75 6.34722V7.21059C13.6067 7.37687 14.3618 7.82497 14.8335 8.4772C15.0762 8.81286 15.0008 9.28172 14.6652 9.52443C14.3295 9.76714 13.8606 9.69179 13.6179 9.35613C13.3349 8.96473 12.7471 8.63889 12 8.63889H11.7145C10.7025 8.63889 10.1806 9.26867 10.1806 9.71605V9.79449C10.1806 10.1375 10.4302 10.5643 11.0258 10.8026L13.5312 11.8047C14.5496 12.212 15.3194 13.105 15.3194 14.2055C15.3194 15.6253 14.107 16.6021 12.75 16.8166V17.6528C12.75 18.067 12.4142 18.4028 12 18.4028C11.5858 18.4028 11.25 18.067 11.25 17.6528V16.7894C10.3933 16.6231 9.63816 16.175 9.16654 15.5228C8.92383 15.1871 8.99918 14.7183 9.33484 14.4756C9.6705 14.2329 10.1394 14.3082 10.3821 14.6439C10.6651 15.0353 11.2529 15.3611 12 15.3611H12.1874C13.2536 15.3611 13.8194 14.6962 13.8194 14.2055C13.8194 13.8625 13.5698 13.4357 12.9742 13.1974L10.4688 12.1953C9.45045 11.788 8.68056 10.895 8.68056 9.79449V9.71605C8.68056 8.30663 9.90675 7.35168 11.25 7.17029V6.34722C11.25 5.93301 11.5858 5.59722 12 5.59722Z" fill="currentColor"/>`
}