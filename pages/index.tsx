import Balance from '@/components/Balance'
import BuyTokens from '@/components/BuyTokens'
import Header from '@/components/layouts/Header'
import MintHistory from '@/components/MintHistory'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import data from '@/utils/data.json'

import classes from './index.module.css'
import Chart from '@/components/Chart/Chart'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [balance, setBalance] = useState(0)
  const [mintHistory, setMintHistory] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const history: any = data
    setMintHistory(history)

    const balance = 0
    setBalance(balance)
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>KAD Token</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        <Header />

        <main className={classes.test}>
          <div>
            <BuyTokens />
            <Balance balance={balance} />
            <MintHistory mintHistory={mintHistory} />
          </div>
          <div>
            <Chart />
          </div>
        </main>
      </div>
    </>
  )
}
