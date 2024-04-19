import { TransitionalStyles } from '../../transitional-styles'
import styles from './container.trans.styles.scss'

export function register() {
  console.log(styles.toString())
  TransitionalStyles.instance.register('gds-container', styles.toString())
}

export default register
