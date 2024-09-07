import React from 'react'
import Image from 'next/image'

import chartImg from '@/assets/chart.png'
import classes from './Chart.module.css'

const Chart = () => {
  return (
    <div>
      <Image src={chartImg} alt="chart img" />
    </div>
  )
}

export default Chart
