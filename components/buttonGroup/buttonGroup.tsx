import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

export type GapType = 'small' | 'medium' | 'large'
export type DirectionType = 'vertical' | 'horizontal'

interface BaseButtonGroupProps {
  children?: ReactNode
  className?: string
  gap?: GapType
  direction?: DirectionType
}

export type ButtonGroupProps = BaseButtonGroupProps

const ButtonGroup: FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
  const { className, children, gap, direction } = props

  const classes = classNames(
    'cat-btn-group',
    {
      [`cat-btn-group-${gap}`]: gap,
      [`cat-btn-group-${direction}`]: direction,
      [`cat-btn-group-${direction}-${gap}`]: direction && gap
    },
    className
  )

  return <div className={classes}>{children}</div>
}

ButtonGroup.defaultProps = {
  direction: 'horizontal'
}

export default ButtonGroup
