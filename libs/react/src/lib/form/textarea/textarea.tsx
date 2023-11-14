import {
  IExpandableInformation,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import {
  ChangeEvent,
  DetailedHTMLProps,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { FormItem } from '../../formItem'
import classNames from 'classnames'

export interface ITextAreaProps
  extends IExpandableInformation,
    DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    > {
  /** Data test id used for finding elements in test */
  'data-testid'?: string
  /** Label describing the textarea */
  label: string
  /** Extra describing text, below the label */
  info?: ReactNode
  /** Validation object */
  validator?: IValidator | undefined
  /** Value of textarea */
  value?: string
}

export const TextArea = ({
  'aria-describedby': ariaDescribedBy,
  autoComplete = 'off',
  className,
  expandableInfo,
  expandableInfoButtonLabel,
  id = randomId(),
  label,
  info,
  onChange,
  role,
  rows = 4,
  validator,
  value,
  'data-testid': dataTestId,
  maxLength,
  ...props
}: ITextAreaProps) => {
  const [uuid] = useState(id)
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const localOnChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setLocalValue(event.target.value)
      if (onChange) onChange(event)
    },
    [setLocalValue, onChange]
  )

  const inputAriaDescribedBy =
    classNames(ariaDescribedBy, {
      [`gds-expandable-info-${uuid}`]: expandableInfo,
      [`${uuid}_info`]: info,
    }) || undefined

  const inputClassName =
    classNames(
      className,
      validator && validateClassName(validator.indicator)
    ) || undefined

  const rightAlignedFooterInfo = maxLength
    ? `${localValue?.length || 0}/${maxLength}`
    : undefined

  return (
    <FormItem
      expandableInfo={expandableInfo}
      expandableInfoButtonLabel={expandableInfoButtonLabel}
      inputId={uuid}
      label={label}
      labelInformation={info}
      role={role}
      validator={validator}
      rightAlignedFooterInfo={rightAlignedFooterInfo}
    >
      <div className="gds-input-wrapper">
        <textarea
          aria-describedby={inputAriaDescribedBy}
          autoComplete={autoComplete}
          className={inputClassName}
          id={uuid}
          onChange={localOnChange}
          role={role}
          rows={rows}
          value={localValue}
          data-testid={dataTestId}
          maxLength={maxLength}
          {...props}
        />
      </div>
    </FormItem>
  )
}
