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
        <div className={classes['token-header']}>
          <div className={classes.title}>
            <h1>Select a token</h1>
            <IoMdClose onClick={closeTokenModal} />
          </div>
          <div className={classes.search}>
            <input type="text" placeholder="Search token or address" autoFocus />
          </div>
        </div>
        <div className={classes['token-list']}>
          <ul>
            <li>
              <div className={classes['token-icon']}>
                <span>
                  <Image src={kadImg} alt="kad token" width={28} height={28} />
                </span>
                <div className={classes['icon-text']}>
                  <h3>KAD</h3>
                  <p>KAD Token</p>
                </div>
              </div>
              <div className={classes['token-amount']}>
                <p>0</p>
              </div>
            </li>
            <li>
              <div className={classes['token-icon']}>
                <span>
                  <Image src={kadImg} alt="kad token" width={28} height={28} />
                </span>
                <div className={classes['icon-text']}>
                  <h3>SOL</h3>
                  <p>Solana</p>
                </div>
              </div>
              <div className={classes['token-amount']}>
                <p>0</p>
              </div>
            </li>
            <li>
              <div className={classes['token-icon']}>
                <span>
                  <Image src={kadImg} alt="kad token" width={28} height={28} />
                </span>
                <div className={classes['icon-text']}>
                  <h3>BTC</h3>
                  <p>Bitcoin</p>
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
