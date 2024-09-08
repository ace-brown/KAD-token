import React from 'react'

import classes from './TokenModal.module.css'
import Button from '../UI/Button'

type TokenModalProps = {
  onClose: () => void
}

const TokenModal = (props: TokenModalProps) => {
  const { onClose } = props

  return (
    <div className={classes['modal-backdrop']} onClick={onClose}>
      <div className={classes['modal-content']} onClick={(e) => e.stopPropagation()}>
        <h1>Modal</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos deleniti nobis iure
          cumque voluptatibus exercitationem? Quod dignissimos deserunt maiores consectetur.
        </p>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  )
}

export default TokenModal
