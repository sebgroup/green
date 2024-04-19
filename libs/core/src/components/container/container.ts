import { HTMLTemplateResult, css } from 'lit'
import { state } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

import { tokens } from '../../tokens.style'

/**
 * @element gds-container
 * @internal
 */
@gdsCustomElement('gds-container')
export class GdsContainer extends GdsElement {
  static styles = [tokens, css`
  :host {
    display: block;
  }
`]

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-container')
  }

  render() {
    return html`${this._tStyles}<slot></slot>`
  }
}
