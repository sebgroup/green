import { LitElement } from 'lit'
import { Ref, createRef, ref } from 'lit/directives/ref'
import {
  gdsCustomElement,
  html,
} from 'src/utils/helpers/custom-element-scoping'
import {
  GdsListboxKbNavController,
  GdsListboxKbNavigation,
} from 'src/controllers/listbox-kb-nav-controller'
import { unwrap } from 'src/utils/helpers/unwrap-slots'
import { GdsMenuItem } from './menu-item'
import { TransitionalStyles } from 'src/transitional-styles'

/**
 * @element gds-menu
 * @internal
 */
@gdsCustomElement('gds-menu')
export class GdsMenu extends LitElement implements GdsListboxKbNavigation {
  #slotRef: Ref<HTMLSlotElement> = createRef()

  constructor() {
    super()
    new GdsListboxKbNavController(this)
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'menu')

    // This component should have the same stile as listbox, so we just apply `gds-listbox` here.
    TransitionalStyles.instance.apply(this, 'gds-listbox')
  }

  get navigableItems() {
    if (!this.#slotRef.value) return []

    let slot = unwrap(this.#slotRef.value)

    return (
      (slot.assignedElements() as GdsMenuItem[]).filter(
        (o) => !o.hasAttribute('isplaceholder')
      ) || []
    )
  }

  render() {
    return html`<slot ${ref(this.#slotRef)}></slot>`
  }
}
