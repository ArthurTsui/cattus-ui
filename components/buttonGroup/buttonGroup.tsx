import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

interface BaseButtonGroupProps {
  children?: ReactNode
  className?: string
}

export type ButtonGroupProps = BaseButtonGroupProps

const ButtonGroup: FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
  const { className, children } = props

  const classes = classNames('cat-btn-group', {}, className)

  return <div className={classes}>{children}</div>
}

export default ButtonGroup
