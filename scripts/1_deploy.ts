import fs from 'fs'
import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js'
import { createMint } from '@solana/spl-token'

import { checkOwner, devConnection, getTokenAddress, OWNER } from './reuse'

checkOwner()

async function createToken(OWNER: Keypair): Promise<void> {
  // createMint creates and initializes a new mint
  const tokenMint = await createMint(devConnection, OWNER, OWNER.publicKey, null, 2)
  console.log(`✅ Token mint created: ${tokenMint.toString()}`)

  // Write token mint to a file
  const address = JSON.stringify({ address: tokenMint.toString() }, null, 4)
  fs.writeFile('./services/tokenMint.json', address, 'utf8', (error) => {
    if (error) {
      console.error('Error saving tokenMint address: ', error)
    } else {
      console.log('✅ Deployed tokenMint address: ', address)
    }
  })
}

async function main() {
  await createToken(OWNER)
  setTimeout(() => {
    try {
      const tokenMint = getTokenAddress()
      console.log('✅ Finished! Deployment complete!', tokenMint)
    } catch (error) {
      console.error('Error reading tokenMint file: ', error)
    }
  }, 2000)
}

main()
