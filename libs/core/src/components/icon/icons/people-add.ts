import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-people-add')
export class IconPeopleAdd extends GdsIcon {
  static _regularSVG = `<path d="M11.8523 13.2513C7.74082 13.3226 4.86459 16.3717 4.5 20.25H12.5M11.8523 13.2513C11.9014 13.2504 11.9506 13.25 12 13.25C12.3521 13.25 12.6954 13.2717 13.029 13.3138M11.8523 13.2513C11.2023 13.2626 10.5834 13.3483 10.0001 13.5M13.029 13.3138C13.3627 13.3559 13.6867 13.4184 14.0004 13.5M13.029 13.3138C13.7309 13.4024 14.3904 13.5812 15 13.838M18.25 15.25V18.25M18.25 18.25V21.25M18.25 18.25H15.25M18.25 18.25H21.25M15.75 6.5C15.75 8.57107 14.0711 10.25 12 10.25C9.92893 10.25 8.25 8.57107 8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  static _solidSVG = `<path d="M12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2Z" fill="currentColor"/><path d="M3.7533 20.1798C4.15473 15.9097 7.38415 12.5 12 12.5C13.7292 12.5 15.2639 12.9785 16.5281 13.8016C16.1986 14.193 16 14.6983 16 15.25V16H15.25C14.0074 16 13 17.0074 13 18.25C13 19.4926 14.0074 20.5 15.25 20.5H16V21H4.5C4.28888 21 4.08754 20.911 3.94541 20.7549C3.80328 20.5988 3.73354 20.39 3.7533 20.1798Z" fill="currentColor"/><path d="M19 15.25C19 14.8358 18.6642 14.5 18.25 14.5C17.8358 14.5 17.5 14.8358 17.5 15.25V17.5H15.25C14.8358 17.5 14.5 17.8358 14.5 18.25C14.5 18.6642 14.8358 19 15.25 19H17.5V21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25V19H21.25C21.6642 19 22 18.6642 22 18.25C22 17.8358 21.6642 17.5 21.25 17.5H19V15.25Z" fill="currentColor"/>`
}