import React, { Ref, useState } from 'react'
import { forwardRef } from 'react'
import { IoMdClose } from 'react-icons/io'
import Image from 'next/image'

import Button from '../UI/Button'
import kadImg from '@/assets/Solana_logo.png'
import classes from './TokenModal.module.css'

type TokenModalProps = {
  closeTokenModal: () => void
}

const TokenModal = forwardRef((props: TokenModalProps, ref: Ref<HTMLDialogElement>) => {
  const { closeTokenModal } = props

  return (
    <dialog className={classes.modal} ref={ref}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Select a token</h1>
          <IoMdClose onClick={closeTokenModal} />
        </div>
        <div className={classes.search}>
          <input type="text" placeholder="Search token or address" autoFocus />
        </div>
        <div className={classes['token-list']}>
          <ul>
            <li>
              <div className={classes['token-icon']}>
                <span>
                  <Image src={kadImg} alt="kad token" width={24} height={24} />
                </span>
                <div className={classes['icon-text']}>
                  <div>KAD</div>
                  <span>KAD Token</span>
                </div>
              </div>
              <div className={classes['token-amount']}>
                <p>0</p>
              </div>
            </li>
            <li>
              <div className={classes['token-icon']}>
                <span>
                  <Image src={kadImg} alt="kad token" width={24} height={24} />
                </span>
                <div className={classes['icon-text']}>
                  <div>SOL</div>
                  <span>Solana</span>
                </div>
              </div>
              <div className={classes['token-amount']}>
                <p>0</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </dialog>
  )
})

export default TokenModal
