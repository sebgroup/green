import { createComponent } from '@lit/react'
import {
  GdsDropdown,
  GdsOption,
} from '@sebgroup/green-core/components/dropdown'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'
import React from 'react'
import { CoreMenuHeading } from '../context-menu/context-menu'

export type CompareWith<T = any> = (o1: T, o2: T) => boolean
export type SearchFilter<T = any> = (search: string, value: T) => boolean
export type DropdownPlacements = 'bottom-start' | 'top-start'
export type OnChange<T = any> = (value: T) => void

export type IndicatorType = 'success' | 'error' | 'info'
export type ValidatorType = 'Required' | 'Email'

export interface ValidatorRules {
  type: ValidatorType
  custom?: () => string | undefined
}

export interface IValidator {
  message: string
  indicator: IndicatorType
  rules?: ValidatorRules
}

export interface DropdownArgs {
  compareWith?: CompareWith
  display?: string // option key to display
  id?: string
  informationLabel?: string
  label?: string
  multiSelect?: boolean
  options: DropdownOption[]
  searchFilter?: SearchFilter
  searchable?: boolean
  texts?: DropdownTexts
  useValue?: string // option key to use as value
  validator?: IValidator
  value?: any

  /** Force width of the popover to match trigger */
  syncPopoverWidth?: boolean

  /** Size of the dropdown trigger */
  size?: 'small' | 'medium'

  /** Hide the label */
  hideLabel?: boolean

  /** Max height of the dropdown */
  maxHeight?: number
}
export interface DropdownTexts {
  placeholder?: string
}
export interface DropdownOption {
  label?: string
  value?: any
  selected?: boolean
  heading?: boolean
  [key: string]: any
}

registerTransitionalStyles()

export const CoreDropdown = createComponent({
  tagName: getScopedTagName('gds-dropdown'),
  elementClass: GdsDropdown,
  events: { onchange: 'change' },
  react: React,
})

export const CoreOption = createComponent({
  tagName: getScopedTagName('gds-option'),
  elementClass: GdsOption,
  react: React,
})

export interface DropdownProps extends DropdownArgs {
  onChange?: OnChange
}

export const Dropdown = ({
  compareWith,
  display = 'label',
  id,
  informationLabel,
  label,
  multiSelect,
  onChange,
  options,
  searchFilter,
  searchable,
  texts,
  useValue = 'value',
  validator,
  value,
  syncPopoverWidth,
  ...props
}: DropdownProps) => {
  const handleOnChange = (e: any) => {
    if ('value' in e.detail) {
      onChange?.(e.detail.value)
    }
  }

  // These adapter functions are used to maintain backwards compatibility with the old interface
  const compareWithAdapter = (o1: DropdownOption, o2: DropdownOption) => {
    const compareFn = compareWith || ((a, b) => a === b)
    return compareFn(o1, o2)
  }

  const searchFilterAdapter = (q: string, o: GdsOption) => {
    if (searchFilter) return searchFilter(q, o.value[useValue])
    else
      return ((q: string, o: GdsOption) =>
        o.innerHTML.toLowerCase().includes(q.toLowerCase()))(q, o)
  }

  return (
    <div className="form-group">
      <CoreDropdown
        id={id}
        label={label}
        searchable={searchable}
        multiple={multiSelect}
        onchange={handleOnChange}
        invalid={validator?.indicator === 'error'}
        compareWith={compareWithAdapter}
        value={value}
        searchFilter={searchFilterAdapter}
        syncPopoverWidth={syncPopoverWidth}
        size={props.size}
        hideLabel={props.hideLabel}
        maxHeight={props.maxHeight}
      >
        {informationLabel && <span slot="sub-label">{informationLabel}</span>}
        {validator && <span slot="message">{validator.message}</span>}
        <CoreOption isPlaceholder aria-hidden>
          {texts?.placeholder || 'Select'}
        </CoreOption>
        {options.map((option) => {
          if (option.heading) {
            return (
              <CoreMenuHeading key={option.label}>
                {option[display]}
              </CoreMenuHeading>
            )
          }
          return (
            <CoreOption key={option[useValue]} value={option[useValue]}>
              {option[display]}
            </CoreOption>
          )
        })}
      </CoreDropdown>
    </div>
  )
}

export default Dropdown
