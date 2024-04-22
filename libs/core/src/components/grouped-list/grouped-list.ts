import { HTMLTemplateResult } from 'lit'
import { state, property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { GdsElement } from '@sebgroup/green-core/gds-element'
import { TransitionalStyles } from '@sebgroup/green-core/transitional-styles'
import {
  gdsCustomElement,
  html,
} from '@sebgroup/green-core/utils/helpers/custom-element-scoping'
import { constrainSlots } from '@sebgroup/green-core/utils/helpers'
import './list-item'

/**
 * @element gds-grouped-list
 * @status beta
 *
 * Grouped lists are used to list many datapoints with labels in a structured way.
 */
@gdsCustomElement('gds-grouped-list')
export class GdsGroupedList extends GdsElement {
  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult
  /**
   * The label for the list that will render in the shadowDOM as the first <li> element in the list with the class `gds-list-heading`
   */
  @property()
  label = ''

  connectedCallback(): void {
    super.connectedCallback()
    constrainSlots(this)

    TransitionalStyles.instance.apply(this, 'gds-grouped-list')
  }

  render() {
    return html`${this._tStyles}${when(
        this.label,
        () =>
          html`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`,
      )}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`
  }
}
