import React, { HTMLProps, ReactNode } from 'react'
import { BadgeType } from '@sebgroup/extract'

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  children?: ReactNode
  badgeType?: BadgeType
  isCloseable?: boolean
  closeText?: string
}

export function Badge({
  children,
  badgeType,
  isCloseable,
  closeText,
  ...props
}: BadgeProps) {
  const [isClosed, setIsClosed] = React.useState<boolean>(false)

  return !isClosed ? (
    <span {...props} className={`badge ${badgeType}`}>
      <strong>{children}</strong>
      {isCloseable && (
        <button
          type="button"
          className="close"
          onClick={() => setIsClosed(true)}
        >
          {closeText}
        </button>
      )}
    </span>
  ) : null
}

export default Badge
