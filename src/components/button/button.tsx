import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
export type ButtonShape = 'default' | 'circle' | 'round'
export type ButtonSize = 'large' | 'middle' | 'small'
export type HtmlType = 'submit' | 'reset' | 'button' | undefined

//基础props类型定义
interface BaseButtonProps {
  type?: ButtonType
  shape?: ButtonShape
  size?: ButtonSize
  htmlType?: HtmlType
  icon?: ReactNode | string
  children?: ReactNode
  className?: string
}

type NativeButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLElement>, 'type'> // 按钮类型，props类型定义
type AnchorButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLElement>, 'type'> // a标签类型，props类型定义

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // button最终的props类型定义

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { className, type, shape, size, icon, children, href, htmlType, ...rest } = props

  const sizeClassNameMap = { large: 'lg', middle: 'md', small: 'sm' }
  const sizeCls = size ? sizeClassNameMap[size] : undefined

  const classes = classNames(
    'cat-btn',
    {
      [`cat-btn-${type}`]: type,
      [`cat-btn-${sizeCls}`]: sizeCls,
      [`cat-btn-${shape}`]: shape,
      [`cat-btn-icon`]: icon
    },
    className
  )

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {typeof icon !== 'string' ? icon : <img src={icon} alt='' className='cat-btn-icon-img' />}
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={htmlType} {...rest}>
      {typeof icon !== 'string' ? icon : <img src={icon} alt='' className='cat-btn-icon-img' />}
      {children}
    </button>
  )
}

//默认props
Button.defaultProps = {
  type: 'default',
  size: 'middle',
  disabled: false
}

export default Button
