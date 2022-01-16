import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

export type SpaceType = 'small' | 'medium' | 'large'
export type Direction = 'vertical' | 'horizontal'

interface BaseSpaceProps {
  type?: SpaceType
  direction?: Direction
  wrap?: boolean
  children?: ReactNode
}

export type SpaceProps = BaseSpaceProps

const Space: FC<SpaceProps> = (props: SpaceProps) => {
  const { type, direction, wrap, children } = props

  const classes = classNames('cat-space', {
    [`cat-space-${type}`]: type,
    [`cat-space-${direction}`]: direction,
    [`cat-space-${wrap}`]: wrap
  })

  return <div className={classes}>{children}</div>
}

Space.defaultProps = {
  type: 'medium',
  direction: 'horizontal',
  wrap: false
}

export default Space
