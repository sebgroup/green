import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-settings-gear')
export class IconSettingsGear extends GdsIcon {
  static _regularSVG = `
<path d="M9.225 5.525L6.21875 4.83125L4.83125 6.21875L5.525 9.225L2.75 11.075V12.925L5.525 14.775L4.83125 17.7812L6.21875 19.1687L9.225 18.475L11.075 21.25H12.925L14.775 18.475L17.7812 19.1687L19.1687 17.7812L18.475 14.775L21.25 12.925V11.075L18.475 9.225L19.1687 6.21875L17.7812 4.83125L14.775 5.525L12.925 2.75H11.075L9.225 5.525Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}