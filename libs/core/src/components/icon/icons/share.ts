import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-share')
export class IconShare extends GdsIcon {
  static _regularSVG = `<path d="M9.00003 10.4286L14 7.57141M9.00003 13.5714L14 16.4286M20.25 6C20.25 7.79493 18.7949 9.25 17 9.25C15.2051 9.25 13.75 7.79493 13.75 6C13.75 4.20507 15.2051 2.75 17 2.75C18.7949 2.75 20.25 4.20507 20.25 6ZM20.25 18C20.25 19.7949 18.7949 21.25 17 21.25C15.2051 21.25 13.75 19.7949 13.75 18C13.75 16.2051 15.2051 14.75 17 14.75C18.7949 14.75 20.25 16.2051 20.25 18ZM9.25 12C9.25 13.7949 7.79493 15.25 6 15.25C4.20507 15.25 2.75 13.7949 2.75 12C2.75 10.2051 4.20507 8.75 6 8.75C7.79493 8.75 9.25 10.2051 9.25 12Z" stroke="currentColor" stroke-width="1.5"/>`
  static _solidSVG = `<path d="M17 2C14.7909 2 13 3.79086 13 6C13 6.41005 13.0617 6.80569 13.1763 7.17815L9.11967 9.49624C8.38653 8.58393 7.26146 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16C7.26154 16 8.38667 15.416 9.1198 14.5036L13.1764 16.8216C13.0617 17.1942 13 17.5899 13 18C13 20.2091 14.7909 22 17 22C19.2091 22 21 20.2091 21 18C21 15.7909 19.2091 14 17 14C15.7385 14 14.6134 14.5839 13.8803 15.4963L9.82366 13.1782C9.9383 12.8057 10 12.4101 10 12C10 11.5899 9.93827 11.1941 9.8236 10.8216L13.8802 8.50357C14.6133 9.41599 15.7385 10 17 10C19.2091 10 21 8.20914 21 6C21 3.79086 19.2091 2 17 2Z" fill="currentColor"/>`
}