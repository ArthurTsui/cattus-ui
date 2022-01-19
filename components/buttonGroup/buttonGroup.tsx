import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

export type ButtonGroupGapSize = 'small' | 'medium' | 'large'
export type ButtonGroupDirection = 'vertical' | 'horizontal'
export type ButtonGroupSize = 'large' | 'medium' | 'small'

interface BaseButtonGroupProps {
  children?: ReactNode
  className?: string
  gap?: ButtonGroupGapSize
  direction?: ButtonGroupDirection
  size?: ButtonGroupSize
}

export type ButtonGroupProps = BaseButtonGroupProps

const ButtonGroup: FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
  const { className, children, gap, direction, size } = props

  const sizeClassNameMap = { large: 'lg', medium: 'md', small: 'sm' }
  const sizeCls = size ? sizeClassNameMap[size] : undefined
  const gapCls = gap ? sizeClassNameMap[gap] : undefined

  const classes = classNames(
    'cat-btn-group',
    {
      [`cat-btn-group-gap-${gapCls}`]: gapCls,
      [`cat-btn-group-${direction}`]: direction,
      [`cat-btn-group-${direction}-${gap}`]: direction && gap,
      [`cat-btn-group-${sizeCls}`]: sizeCls
    },
    className
  )

  return <div className={classes}>{children}</div>
}

ButtonGroup.defaultProps = {
  direction: 'horizontal',
  size: 'medium'
}

export default ButtonGroup
