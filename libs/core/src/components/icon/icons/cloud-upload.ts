import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-cloud-upload')
export class IconCloudUpload extends GdsIcon {
  static _regularSVG = `
<path d="M12 19.25V11.75M12 11.75L14.5 14.25M12 11.75L9.5 14.25M15 19.25H18.125C20.4032 19.25 22.25 17.4032 22.25 15.125C22.25 12.8468 20.4032 11 18.125 11C18.0814 11 18.038 11.0007 17.9948 11.002C17.9983 10.9184 18 10.8344 18 10.75C18 7.43629 15.3137 4.75 12 4.75C9.3716 4.75 7.13793 6.44009 6.32647 8.7928C3.74507 9.12339 1.75 11.3287 1.75 14C1.75 16.8995 4.10051 19.25 7 19.25H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path d="M12 19.25V11.75M12 11.75L14.5 14.25M12 11.75L9.5 14.25M15 19.25H18.125C20.4032 19.25 22.25 17.4032 22.25 15.125C22.25 12.8468 20.4032 11 18.125 11C18.0814 11 18.038 11.0007 17.9948 11.002C17.9983 10.9184 18 10.8344 18 10.75C18 7.43629 15.3137 4.75 12 4.75C9.3716 4.75 7.13793 6.44009 6.32647 8.7928C3.74507 9.12339 1.75 11.3287 1.75 14C1.75 16.8995 4.10051 19.25 7 19.25H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
}