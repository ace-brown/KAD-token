import fs from 'fs'
import 'dotenv/config'
import path from 'path'
import { clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js'

export const devConnection = new Connection(clusterApiUrl('devnet'))
export const TOKEN_OWNER = process.env.INJECTED_DEV_TOKEN_OWNER_KEYPAIR || ''
export function checkOwner() {
  if (!TOKEN_OWNER) {
    console.log('Please provide a TOKEN OWNER KEYPAIR')
    process.exit(1)
  }
}

// Converting owenr array (comming from dotenv) into a keyPair
const ownerArray = Uint8Array.from(TOKEN_OWNER.split(',').map(Number))
export const OWNER: Keypair = Keypair.fromSecretKey(ownerArray)

export function getTokenAddress(): PublicKey {
  const filePath = path.join(__dirname, '../services/tokenMint.json')
  if (!fs.existsSync(filePath)) {
    throw new Error('No Token mint file found')
  }
  /**
   * In Webster, a mint means a place where money is coined, In blockchain ecosystems,
   * a "mint" typically refers to a special account or object that governs a token
   * type. This mint account holds the authority to mint (create) new tokens.
   * The term "mint" is not describing an action like "minting tokens," but rather
   * it refers to the source or origin of the tokens.
   */
  const tokenMintString = fs.readFileSync(filePath, 'utf-8')
  const tokenMint = JSON.parse(tokenMintString)
  return new PublicKey(tokenMint.address)
}
