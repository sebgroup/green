import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-cain-link')
export class IconCainLink extends GdsIcon {
  static _regularSVG = `<path d="M9.75027 5.52371L10.7168 4.55722C13.1264 2.14759 17.0332 2.14759 19.4428 4.55722C21.8524 6.96684 21.8524 10.8736 19.4428 13.2832L18.4742 14.2519M5.52886 9.74513L4.55722 10.7168C2.14759 13.1264 2.1476 17.0332 4.55722 19.4428C6.96684 21.8524 10.8736 21.8524 13.2832 19.4428L14.2478 18.4782M9.5 14.5L14.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/>`
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9125 5.08755C16.7957 2.97082 13.3638 2.97082 11.2471 5.08755L9.75027 6.58437L8.68961 5.52371L10.1864 4.02689C12.889 1.32437 17.2706 1.32437 19.9731 4.02689C22.6756 6.7294 22.6756 11.111 19.9731 13.8136L18.4742 15.3125L17.4135 14.2519L18.9125 12.7529C21.0292 10.6362 21.0292 7.20428 18.9125 5.08755ZM15.5607 9.5L9.5 15.5607L8.43934 14.5L14.5 8.43934L15.5607 9.5ZM6.58952 9.74513L5.08755 11.2471C2.97082 13.3638 2.97082 16.7957 5.08755 18.9125C7.20428 21.0292 10.6362 21.0292 12.7529 18.9125L14.2478 17.4176L15.3084 18.4782L13.8136 19.9731C11.1111 22.6756 6.72941 22.6756 4.02689 19.9731C1.32437 17.2706 1.32437 12.889 4.02689 10.1864L5.52886 8.68446L6.58952 9.74513Z" fill="currentColor"/>`
}