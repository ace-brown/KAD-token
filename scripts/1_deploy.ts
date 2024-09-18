import { clusterApiUrl, Connection } from '@solana/web3.js'
import { checkOwner } from './reuse'

checkOwner()

const connection = new Connection(clusterApiUrl('devnet'))
