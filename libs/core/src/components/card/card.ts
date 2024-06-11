import { css, unsafeCSS } from 'lit'

import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators/watch'
import { tokens } from '../../tokens.style'

import CardCSS from './card.style.css'

const BreakpointPattern =
  /(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/

type CSSProperty = {
  name: string
  value: string | number | undefined
}

@gdsCustomElement('gds-card')
export class GdsCard extends GdsElement {
  static styles = [tokens, CardCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ attribute: 'shadow', type: String })
  shadow?: string

  @property({ attribute: 'radius', type: String })
  radius?: string

  @property({ attribute: 'background', type: String })
  background?: string

  @property({ attribute: 'border', type: String })
  border?: string

  @property({ attribute: 'hovered', type: Boolean })
  hovered?: boolean

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * It updates the column, gap, and padding variables.
   */
  connectedCallback() {
    super.connectedCallback()
    this._updateshadowVariables()
    this._updateRadiusVariables()
    this._updateBackgroundVariables()
  }

  private _updateCSSVariables(
    propertyName: string,
    propertyPrefix: string,
  ): void {
    let propertyValue: string | undefined

    if (propertyName in this) {
      propertyValue = this[propertyName as keyof this] as string | undefined
    }

    const match: RegExpMatchArray | null =
      propertyValue?.match(BreakpointPattern) || null

    let desktop: string | number | undefined
    let tablet: string | number | undefined
    let mobile: string | number | undefined

    const { l, m, s } = match?.groups || {}

    const processBreakpoints = (
      l?: string,
      m?: string,
      s?: string,
      token?: string,
    ) => {
      const desktop = l ? `var(--gds-${token}-${l.split(':')[1]})` : undefined
      const tablet = m ? `var(--gds-${token}-${m.split(':')[1]})` : undefined
      const mobile = s ? `var(--gds-${token}-${s.split(':')[1]})` : undefined

      return { desktop, tablet, mobile }
    }

    if (propertyName === 'shadow') {
      if (this.shadow && !this.shadow.includes(' ')) {
        desktop = tablet = mobile = `var(--gds-shadow-${this.shadow})`
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s, 'shadow'))
      }
    }

    if (propertyName === 'radius') {
      if (this.radius && !this.radius.includes(' ')) {
        desktop = tablet = mobile = `var(--gds-sys-radii-${this.radius})`
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(
          l,
          m,
          s,
          'sys-radii',
        ))
      }
    }

    /*  
    --gds-sys-color-container-container: #F3F3F2;
    --gds-sys-color-container-container-dim1: #E7E7E4;
    --gds-sys-color-container-container-dim2: #DADAD7;
    --gds-sys-color-container-container-bright: #FFFFFF;
    --gds-sys-color-container-container-shade1: #353531;
    --gds-sys-color-container-container-shade2: #1B1B18;
    --gds-sys-color-container-container-shade3: #353531;
    --gds-sys-color-container-container-disabled: #F9F9F9;
    --gds-sys-color-container-container-positive: #006D31;
    --gds-sys-color-container-container-negative: #BA1D00;
    --gds-sys-color-container-container-negative-bright: #FFEDE9;
     */

    if (propertyName === 'background') {
      if (this.background && !this.background.includes(' ')) {
        desktop =
          tablet =
          mobile =
            `var(--gds-sys-color-container-container-${this.background})`
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(
          l,
          m,
          s,
          'sys-color-container-container',
        ))
      }
    }

    const properties: CSSProperty[] = [
      { name: `${propertyPrefix}-desktop`, value: desktop },
      { name: `${propertyPrefix}-tablet`, value: tablet },
      { name: `${propertyPrefix}-mobile`, value: mobile },
    ]

    const cssVariables: string = properties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--_${name}: ${value};`)
      .join(' ')

    this.#gridVariables = {
      ...this.#gridVariables,
      [propertyPrefix]: css`
        ${unsafeCSS(cssVariables)}
      `,
    }

    // inject final CSS
    this._dynamicStylesController.inject(
      'grid-vars',
      css`
        :host {
          ${unsafeCSS(Object.values(this.#gridVariables).join(''))}
        }
      `,
    )
  }

  #gridVariables = {
    // varsshadow: css``,
  }

  @watch('shadow')
  private _updateshadowVariables() {
    this._updateCSSVariables('shadow', 'shadow')
  }

  @watch('radius')
  private _updateRadiusVariables() {
    this._updateCSSVariables('radius', 'radius')
  }

  @watch('background')
  private _updateBackgroundVariables() {
    this._updateCSSVariables('background', 'background')
  }

  render() {
    return html`<div class="card"><slot></slot></div>`
  }
}