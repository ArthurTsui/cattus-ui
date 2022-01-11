import classNames from 'classnames'
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, CSSProperties, FC } from 'react'

export type ButtonType = 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'default'
export type ButtonFacade = 'contained' | 'outlined' | 'text'
export type ButtonSize = 'large' | 'middle' | 'small'
export type ButtonShape = 'rect' | 'roundRect' | 'circle' | 'radian'
export type HtmlType = 'submit' | 'reset' | 'button' | undefined

//基础props类型定义
interface BaseButtonProps {
  type?: ButtonType
  facade?: ButtonFacade
  size?: ButtonSize
  shape?: ButtonShape
  htmlType?: HtmlType
  children?: ReactNode
  endIcon?: ReactNode | string
  startIcon?: ReactNode | string
  style?: CSSProperties
  className?: string
}

type AnchorButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLElement>, 'type'> // a标签类型，props类型定义
type NativeButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLElement>, 'type'> // 按钮类型，props类型定义

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // button最终的props类型定义

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { type, facade, size, shape, htmlType, startIcon, endIcon, children, href, className, style, ...rest } = props

  const sizeClassNameMap = { large: 'lg', middle: 'md', small: 'sm' }
  const sizeCls = size ? sizeClassNameMap[size] : undefined

  const classes = classNames(
    'cat-btn',
    {
      [`cat-btn-${type}`]: type,
      [`cat-btn-${facade}`]: facade,
      [`cat-btn-${sizeCls}`]: sizeCls,
      [`cat-btn-${shape}`]: shape
    },
    className
  )

  if (href) {
    return (
      <a href={href} className={classes} style={style} {...rest}>
        {typeof startIcon !== 'string' ? startIcon : <img src={startIcon} alt='' className='cat-btn-icon-img' />}
        {children}
        {typeof endIcon === 'string' ? <img src={endIcon} alt='' className='cat-btn-icon-img' /> : endIcon}
      </a>
    )
  }

  return (
    <button className={classes} type={htmlType} style={style} {...rest}>
      {typeof startIcon === 'string' ? <img src={startIcon} alt='' className='cat-btn-icon-img' /> : startIcon}
      {children}
      {typeof endIcon === 'string' ? <img src={endIcon} alt='' className='cat-btn-icon-img' /> : endIcon}
    </button>
  )
}

//默认props
Button.defaultProps = {
  type: 'primary',
  facade: 'contained',
  size: 'middle',
  shape: 'roundRect',
  htmlType: 'button'
}

export default Button
