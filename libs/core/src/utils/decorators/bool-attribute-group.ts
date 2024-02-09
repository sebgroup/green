import type { LitElement } from 'lit'

/**
 * Register a group of boolean attributes as a single property. If one of the
 * attributes is set, the property will be set to the attribute name.
 *
 * Only one of the attributes can be set at a time. If multiple attributes are
 * set, the last one in the list will be used.
 *
 * Example:
 * ```ts
 * @boolAttributeGroup('primary', 'secondary', 'tertiary')
 * variant = 'primary'
 * ```
 */
export function boolAttributeGroup(...attributeList: string[]) {
  return <ElemClass extends LitElement>(
    proto: ElemClass,
    descriptor: PropertyKey
  ) => {
    const connectedCallback = proto.connectedCallback
    const disconnectedCallback = proto.disconnectedCallback

    proto.connectedCallback = function (this: ElemClass) {
      connectedCallback?.call(this)

      attributeList.forEach((attribute) => {
        if (this.hasAttribute(attribute)) {
          ;(this as any)[descriptor] = attribute
        }
      })
    }

    proto.disconnectedCallback = function (this: ElemClass) {
      disconnectedCallback?.call(this)
    }
  }
}
