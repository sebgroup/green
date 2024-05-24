import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bookmark-check
 */
@gdsCustomElement('gds-icon-bookmark-check')
export class IconBookmarkCheck extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M19.25 2.75H20C20 2.33579 19.6642 2 19.25 2V2.75ZM19.25 21L18.8877 21.6567C19.12 21.7849 19.4028 21.7807 19.6313 21.6458C19.8598 21.5109 20 21.2653 20 21H19.25ZM4.75 21H4C4 21.2653 4.14021 21.5109 4.36871 21.6458C4.5972 21.7807 4.87997 21.7849 5.11231 21.6567L4.75 21ZM4.75 2.75V2C4.33579 2 4 2.33579 4 2.75H4.75ZM12 17L12.3623 16.3433C12.1368 16.2189 11.8632 16.2189 11.6377 16.3433L12 17ZM9.88033 9.81967C9.58743 9.52677 9.11256 9.52677 8.81967 9.81967C8.52677 10.1126 8.52677 10.5874 8.81967 10.8803L9.88033 9.81967ZM11 12L10.4697 12.5303C10.6103 12.671 10.8011 12.75 11 12.75C11.1989 12.75 11.3897 12.671 11.5303 12.5303L11 12ZM15.3803 8.68033C15.6732 8.38744 15.6732 7.91256 15.3803 7.61967C15.0874 7.32678 14.6126 7.32678 14.3197 7.61967L15.3803 8.68033ZM18.5 2.75V21H20V2.75H18.5ZM5.5 21V2.75H4V21H5.5ZM4.75 3.5H19.25V2H4.75V3.5ZM19.6123 20.3433L12.3623 16.3433L11.6377 17.6567L18.8877 21.6567L19.6123 20.3433ZM11.6377 16.3433L4.38769 20.3433L5.11231 21.6567L12.3623 17.6567L11.6377 16.3433ZM8.81967 10.8803L10.4697 12.5303L11.5303 11.4697L9.88033 9.81967L8.81967 10.8803ZM11.5303 12.5303L15.3803 8.68033L14.3197 7.61967L10.4697 11.4697L11.5303 12.5303Z" fill="currentColor"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.33579 4.33579 2 4.75 2H19.25C19.6642 2 20 2.33579 20 2.75V21C20 21.2653 19.8598 21.5109 19.6313 21.6458C19.4028 21.7807 19.12 21.7849 18.8877 21.6567L12 17.8566L5.11231 21.6567C4.87997 21.7849 4.5972 21.7807 4.36871 21.6458C4.14021 21.5109 4 21.2653 4 21V2.75ZM15.3803 8.68033C15.6732 8.38744 15.6732 7.91256 15.3803 7.61967C15.0874 7.32678 14.6126 7.32678 14.3197 7.61967L11 10.9393L9.88033 9.81967C9.58744 9.52677 9.11256 9.52677 8.81967 9.81967C8.52677 10.1126 8.52677 10.5874 8.81967 10.8803L10.4697 12.5303C10.6103 12.671 10.8011 12.75 11 12.75C11.1989 12.75 11.3897 12.671 11.5303 12.5303L15.3803 8.68033Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bookmark check'
}