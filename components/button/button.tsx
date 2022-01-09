import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, CSSProperties, FC } from 'react'
import classNames from 'classnames'

export type ButtonType = 'primary' | 'dashed' | 'link' | 'text' | 'default'
export type ButtonShape = 'default' | 'circle' | 'round'
export type ButtonSize = 'large' | 'middle' | 'small'
export type HtmlType = 'submit' | 'reset' | 'button' | undefined

//基础props类型定义
interface BaseButtonProps {
  type?: ButtonType
  danger?: boolean
  ghost?: boolean
  shape?: ButtonShape
  size?: ButtonSize
  htmlType?: HtmlType
  icon?: ReactNode | string
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

type NativeButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLElement>, 'type'> // 按钮类型，props类型定义
type AnchorButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLElement>, 'type'> // a标签类型，props类型定义

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // button最终的props类型定义

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, type, danger, ghost, shape, size, icon, children, href, htmlType, style, ...rest } = props

  const sizeClassNameMap = { large: 'lg', middle: 'md', small: 'sm' }
  const sizeCls = size ? sizeClassNameMap[size] : undefined

  const classes = classNames(
    'cat-btn',
    {
      [`cat-btn-${type}`]: type,
      [`cat-btn-danger`]: danger,
      [`cat-btn-ghost`]: ghost,
      [`cat-btn-${sizeCls}`]: sizeCls,
      [`cat-btn-${shape}`]: shape,
      [`cat-btn-a`]: href,
      [`cat-btn-icon`]: icon
    },
    className
  )

  if (href) {
    return (
      <a href={href} className={classes} style={style} {...rest}>
        {typeof icon !== 'string' ? icon : <img src={icon} alt='' className='cat-btn-icon-img' />}
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={htmlType} style={style} {...rest}>
      {typeof icon !== 'string' ? icon : <img src={icon} alt='' className='cat-btn-icon-img' />}
      {children}
    </button>
  )
}

//默认props
Button.defaultProps = {
  type: 'default',
  size: 'middle',
  disabled: false,
  danger: false,
  ghost: false,
  htmlType: 'button'
}

export default Button
