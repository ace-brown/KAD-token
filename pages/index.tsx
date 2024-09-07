import { useEffect, useState } from 'react'
import Head from 'next/head'

import Balance from '@/components/layouts/Balance'
import BuyTokens from '@/components/layouts/BuyTokens'
import MintHistory from '@/components/layouts/MintHistory'
import Header from '@/components/layouts/Header'
import data from '@/utils/data.json'
import Chart from '@/components/Chart/Chart'
import Card from '@/components/UI/Card'
import classes from './index.module.css'

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

        <main className={classes['main-area']}>
          <Card className={classes['token-area']}>
            <BuyTokens />
            <Balance balance={balance} />
            <MintHistory mintHistory={mintHistory} />
          </Card>
          <div className={classes['chart-area']}>
            <Chart />
          </div>
        </main>
      </div>
    </>
  )
}
