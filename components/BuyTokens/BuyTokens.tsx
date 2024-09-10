import React, { useRef, useState } from 'react'
import Image from 'next/image'

import Button from '../UI/Button'
import kadImg from '@/assets/Solana_logo.png'
import classes from './BuyTokens.module.css'
import { FaChevronDown } from 'react-icons/fa'
import Card from '../UI/Card'
import TokenModal from './TokenModal'
import { useTranslation } from 'react-i18next'

const BuyTokens = () => {
  const [amount, setAmount] = useState('')
  const tokenModalRef = useRef<HTMLDialogElement>(null)
  const { t } = useTranslation()

  const openTokenModal = () => {
    if (tokenModalRef.current) {
      tokenModalRef.current.showModal()
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }
  }

  const closeTokenModal = () => {
    if (tokenModalRef.current) {
      tokenModalRef.current.close()
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(amount)
  }

  return (
    <>
      <form className={classes['buy-tokens']} onSubmit={handleSubmit}>
        <Card className={classes['select-area']}>
          <button type="button" className={classes['select-btn']} onClick={openTokenModal}>
            <span>
              <Image src={kadImg} alt="kad token" width={24} height={24} />
            </span>
            <p>KAD</p>
            <FaChevronDown />
          </button>
          <input
            className={classes['select-input']}
            type="number"
            value={amount}
            min="0"
            placeholder="0"
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </Card>
        <Button
          className={classes['submit-btn']}
          type="submit"
          // disabled={!amount || amount === '0'}
        >
          {t('mint')}
        </Button>
      </form>
      <TokenModal ref={tokenModalRef} closeTokenModal={closeTokenModal} />
    </>
  )
}

export default BuyTokens
