import React, { Ref } from 'react'
import { forwardRef } from 'react'

import classes from './TokenModal.module.css'
import Button from '../UI/Button'

type TokenModalProps = {
  closeTokenModal: () => void
}

const TokenModal = forwardRef((props: TokenModalProps, ref: Ref<HTMLDialogElement>) => {
  const { closeTokenModal } = props

  return (
    <dialog className={classes['modal-backdrop']} ref={ref}>
      <h1>Modal</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos deleniti nobis iure
        cumque voluptatibus exercitationem? Quod dignissimos deserunt maiores consectetur.
      </p>
      <Button onClick={closeTokenModal}>Close</Button>
    </dialog>
  )
})

export default TokenModal
