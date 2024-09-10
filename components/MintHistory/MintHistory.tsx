import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { MintHistoryItem } from '@/utils/types.dt'
import classes from './MintHistory.module.css'
import Card from '../UI/Card'

const formatReceiver = (receiver: string) => {
  return `${receiver.substring(0, 6)}...${receiver.substring(receiver.length - 6)}`
}

const MintHistory = ({ mintHistory }: { mintHistory: MintHistoryItem[] }) => {
  return (
    <Card className={classes['mint-history']}>
      <h1>Recently Purchased</h1>
      <ul className={classes['mint-list']}>
        {mintHistory.map((minter, i) => (
          <li key={i}>
            <div className={classes['mint-item']}>
              <div>
                <Link href={minter.addressLink} target="_blank" rel="noopener noreferrer">
                  {formatReceiver(minter.receiver.toString())}
                </Link>
                - <span>{minter.amount} DMA</span>
              </div>
              <Link href={minter.transactionLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={12} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default MintHistory
