import { clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js'
import { getOrCreateAssociatedTokenAccount } from '@solana/spl-token'

import { checkOwner, getTokenAddress, OWNER } from './reuse'

checkOwner()

const connection = new Connection(clusterApiUrl('devnet'))

async function getOrCreateATA(tokenMint: PublicKey, owner: Keypair): Promise<PublicKey> {
  const maxRetries = 30
  let attempt = 0

  while (attempt < maxRetries) {
    try {
      console.log(
        `Attempt ${
          attempt + 1
        } to get or create Associated Token Account (ATA) for token mint: ${tokenMint.toString()}`
      )
      const ownerTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        OWNER,
        tokenMint,
        OWNER.publicKey
      )

      console.log(`✅ Successfully created ATA: ${ownerTokenAccount.address.toString()}`)
      return ownerTokenAccount.address
    } catch (error) {
      console.error(`❌ Error on creating or fetching ATA on attempt ${attempt + 1}: `, error)
      attempt++
      if (attempt <= maxRetries) {
        console.error('❌ Max tries reached. Throwing error.')
        throw error
      }
      console.log('Retrying...')
    }
  }
  throw new Error('Failed to create or get ATA after max retries.')
}

async function main() {
  const mintToken = getTokenAddress()
  const ata = await getOrCreateATA(mintToken, OWNER)
  console.log('✅ Associated Token Account: ', ata)
}

main()
