import React, { ReactNode } from 'react'

import classes from './Card.module.css'

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`${classes.card} ${className ? className : ''}`}>{children}</div>
}

export default Card
