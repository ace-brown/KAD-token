import React, { useState } from 'react'
import Image from 'next/image'

import Button from '../UI/Button'
import kadImg from '@/assets/Solana_logo.png'
import classes from './BuyTokens.module.css'
import { FaChevronDown } from 'react-icons/fa'
import Card from '../UI/Card'

const BuyTokens = () => {
  const [amount, setAmount] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(amount)
  }

  return (
    <form className={classes['buy-tokens']} onSubmit={handleSubmit}>
      <Card className={classes['select-area']}>
        <button type="button" className={classes['select-btn']}>
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
        type="submit"
        // disabled={!amount || amount === '0'}
      >
        Mint Tokens
      </Button>
    </form>
  )
}

export default BuyTokens
