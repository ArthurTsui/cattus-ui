import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, CSSProperties, FC } from 'react'
import classNames from 'classnames'
import Space from '../space'

export type ButtonType = 'primary' | 'danger' | 'success' | 'warning' | 'secondary' | 'default'
export type ButtonFacade = 'contained' | 'outlined' | 'text'
export type ButtonSize = 'large' | 'medium' | 'small'
export type ButtonShape = 'rect' | 'roundRect' | 'circle' | 'round'
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

  const sizeClassNameMap = { large: 'lg', medium: 'md', small: 'sm' }
  const sizeCls = size ? sizeClassNameMap[size] : undefined

  const facadeTypeCls = facade && type ? facade + type.replace(/^\S/, (s) => s.toUpperCase()) : undefined

  const classes = classNames(
    'cat-btn',
    {
      [`cat-btn-${type}`]: type,
      [`cat-btn-${facade}`]: facade,
      [`cat-btn-${sizeCls}`]: sizeCls,
      [`cat-btn-${shape}`]: shape,
      [`cat-btn-${facadeTypeCls}`]: facadeTypeCls
    },
    className
  )

  if (startIcon || endIcon) {
    return (
      <>
        {href ? (
          <a href={href} className={classes} style={style} {...rest}>
            <Space>
              {typeof startIcon !== 'string' ? startIcon : <img src={startIcon} alt='' className='cat-btn-icon-img' />}
              <span>{children}</span>
              {typeof endIcon === 'string' ? <img src={endIcon} alt='' className='cat-btn-icon-img' /> : endIcon}
            </Space>
          </a>
        ) : (
          <button className={classes} type={htmlType} style={style} {...rest}>
            <Space>
              {typeof startIcon === 'string' ? <img src={startIcon} alt='' className='cat-btn-icon-img' /> : startIcon}
              <span>{children}</span>
              {typeof endIcon === 'string' ? <img src={endIcon} alt='' className='cat-btn-icon-img' /> : endIcon}
            </Space>
          </button>
        )}
      </>
    )
  }

  return (
    <>
      {href ? (
        <a href={href} className={classes} style={style} {...rest}>
          {children}
        </a>
      ) : (
        <button className={classes} type={htmlType} style={style} {...rest}>
          {children}
        </button>
      )}
    </>
  )
}

//默认props
Button.defaultProps = {
  type: 'primary',
  facade: 'contained',
  size: 'medium',
  shape: 'roundRect',
  htmlType: 'button'
}

export default Button
