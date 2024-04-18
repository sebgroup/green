import { IValidator, randomId, validateClassName } from '@sebgroup/extract'
import classNames from 'classnames'
import { FormEventHandler, HTMLProps, useState } from 'react'

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  /** Use this prop to control the checked state of the checkbox */
  checked?: boolean
  /** The label of the checkbox */
  label?: string
  /** A test id that will be placed in the `data-testid` attribute on the input element */
  testId?: string
  /** An object used to render the validation status for the component */
  validator?: IValidator
  /** A handler function that takes the event and can act on it */
  onChange?: FormEventHandler<HTMLInputElement>
}

export const Checkbox = ({
  'aria-describedby': ariaDescribedBy,
  id = randomId(),
  label,
  validator,
  testId,
  required,
  className,
  ...props
}: CheckboxProps) => {
  const [uuid] = useState(id)

  const validationClassName = validateClassName(validator?.indicator)

  const labelClassNames = classNames('form-control', {
    [validationClassName]: validator,
  })

  const inputClassNames = classNames(className, {
    [validationClassName]: validator,
  })

  const describedBy = classNames(ariaDescribedBy, {
    [`${uuid}_message`]:
      validator?.message !== undefined && validator.message.length > 0,
  })

  return (
    <div className="form-group">
      <label htmlFor={uuid} className={labelClassNames}>
        {label}
        <input
          aria-describedby={describedBy || undefined}
          aria-invalid={validator?.indicator === 'error'}
          aria-required={required}
          className={inputClassNames || undefined}
          type="checkbox"
          data-testid={testId}
          id={uuid}
          required={required}
          {...props}
        />
        <i />
      </label>
      {validator && (
        <span className="form-info" id={`${uuid}_message`}>
          {validator.message}
        </span>
      )}
    </div>
  )
}
