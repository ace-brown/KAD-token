import 'dotenv/config'
import path from 'path'
import fs from 'fs'
import { Keypair, PublicKey } from '@solana/web3.js'

export const TOKEN_OWNER = process.env.INJECTED_DEV_TOKEN_OWNER_KEYPAIR || ''
export const checkOwner = () => {
  if (!TOKEN_OWNER) {
    console.log('Please provide a TOKEN OWNER KEYPAIR')
    process.exit(1)
  }
}

// Converting owenr array (comming from dotenv) into a keyPair
export const ownerArray = Uint8Array.from(TOKEN_OWNER.split(',').map(Number))
export const OWNER: Keypair = Keypair.fromSecretKey(ownerArray)

export const getTokenAddress = (): PublicKey => {
  const filePath = path.join(__dirname, '../services/minToken.json')
  if (!fs.existsSync(filePath)) {
    throw new Error('No Token mint file found')
  }

  const tokenMintString = fs.readFileSync(filePath, 'utf-8')
  const tokenMint = JSON.parse(tokenMintString)
  return new PublicKey(tokenMint.address)
}
