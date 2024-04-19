import { css, unsafeCSS } from 'lit'

import palletCss from '../../../dist/libs/tokens/internal/pallet.css'
import lightThemeCss from '../../../dist/libs/tokens/internal/theme/light.css'
import sizeCSS from '../../../dist/libs/tokens/internal/size.css'
import utilityStyles from './_utilities.css'

const tokens = [
  unsafeCSS(palletCss),
  unsafeCSS(lightThemeCss),
  unsafeCSS(sizeCSS),
  unsafeCSS(utilityStyles),
  css`
    :host(.border) {
      border: 1px solid #000;
    }
  `
]

export { tokens }
