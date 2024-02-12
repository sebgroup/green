import { LitElement, html, unsafeCSS } from 'lit'

import styles from './ripple.styles.scss'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { query } from 'lit/decorators.js'

@gdsCustomElement('gds-ripple')
export class GdsRipple extends LitElement {
  static get styles() {
    return unsafeCSS(styles)
  }

  @query('div') private _rippleEl?: HTMLDivElement

  render() {
    return html`<div></div>`
  }

  onmousedown = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const rect = target.getBoundingClientRect()
    const rippleEl = this._rippleEl

    let top = e.clientY - rect.top
    let left = e.clientX - rect.left

    // Triggered by keyboard, most likely
    if (top < 0 && left < 0) {
      top = rect.height / 2
      left = rect.width / 2
    }

    if (rippleEl) {
      rippleEl.classList.remove('gds-ripple-effect')
      this.style.setProperty('--gds-ripple-top', `${top}px`)
      this.style.setProperty('--gds-ripple-left', `${left}px`)
      setTimeout(() => {
        rippleEl.classList.add('gds-ripple-effect')
      }, 20)
    }
  }
}
