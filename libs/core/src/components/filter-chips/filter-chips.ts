import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { GdsFormControlElement } from '../form-control'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { resizeObserver } from '../../utils/decorators/resize-observer'
import { watch } from '../../utils/decorators/watch'
import { stringArrayConverter } from '../../utils/helpers/attribute-converters'

import './filter-chip'
import type { GdsFilterChip } from './filter-chip'

import { styles } from './filter-chips.styles'

/**
 * @element gds-filter-chips
 */
@gdsCustomElement('gds-filter-chips')
export class GdsFilterChips<ValueT = any> extends GdsFormControlElement<
  ValueT | ValueT[]
> {
  static styles = [styles]

  @property({ converter: stringArrayConverter })
  value?: ValueT | ValueT[]

  /**
   * Whether multiple chips can be selected at once.
   * @attr multiple
   */
  @property({ type: Boolean })
  multiple = false

  /**
   * Returns the chips in the control
   * @readonly
   */
  get chips() {
    return this._elSlot
      ? (this._elSlot.assignedElements() as GdsFilterChip[])
      : []
  }

  /**
   * Whether the chips should collapse into a single row when space is limited
   * @attr row-collapse
   */
  @property({ type: Boolean, attribute: 'row-collapse' })
  rowCollapse = false

  @state()
  private _collapsed = false

  @query('slot')
  private _elSlot!: HTMLSlotElement

  render() {
    const layoutClasses = {
      collapse: this._collapsed,
    }
    return html`<div class="chips ${classMap(layoutClasses)}" role="list">
      <slot
        @click=${this.#handleChipClick}
        @slotchange=${this.#handleSlotChange}
      ></slot>
    </div>`
  }

  #handleChipClick = (event: Event) => {
    const clickedChip = this.chips.find(
      (s) => s === event.target || s.contains(event.target as Node),
    )
    if (clickedChip) {
      if (this.multiple && Array.isArray(this.value)) {
        if (clickedChip.selected) {
          this.value = this.value.filter((v) => v !== clickedChip.value)
        } else {
          this.value = [...this.value, clickedChip.value]
        }
      } else {
        this.value = clickedChip.value
      }

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { clickedChip, value: this.value },
          bubbles: true,
          composed: true,
        }),
      )
    }
  }

  private _collapseThreshold = 3
  private _collapsedAt = 0

  @resizeObserver()
  private _handleResize() {
    if (!this.rowCollapse) return

    const chipHeight = this.#getChipHeight()
    const selfHeight = this.offsetHeight
    const selfWidth = this.offsetWidth

    if (selfHeight >= chipHeight * this._collapseThreshold) {
      this._collapsed = true
      this._collapsedAt = selfWidth
    }

    if (selfWidth > this._collapsedAt) {
      this._collapsed = false
    }
  }

  #getChipHeight() {
    return this.chips[0]?.offsetHeight || 0
  }

  #handleSlotChange() {
    const selChipValue = this.chips.find((s) => s.selected)?.value
    if (selChipValue) {
      this.value = selChipValue
    }
  }

  @watch('value')
  private _updateSelectedFromValue() {
    if (!this.value) return

    if (this.multiple && !Array.isArray(this.value)) {
      this.value = [this.value]
    }

    if (!this.multiple && Array.isArray(this.value)) {
      this.value = this.value[0]
    }

    this.updateComplete.then(() => {
      this.chips.forEach((chip) => {
        chip.selected = this.multiple
          ? (this.value as ValueT[]).includes(chip.value)
          : this.value === chip.value
      })
    })
  }
}
