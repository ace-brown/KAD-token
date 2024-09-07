import React, { ReactNode } from 'react'

import classes from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'link'
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    type = 'button',
    isLoading = false,
    isDisabled = false,
    onClick,
    ...rest
  } = props

  return (
    <button
      className={`${classes.btn} ${classes[variant]} ${isLoading ? classes.loading : ''}`}
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? 'Loading ...' : children}
    </button>
  )
}

export default Button
