import type {
  BalancesChangedListener,
  OutputReceivedListener,
  SyncProgressListener,
} from 'monero-javascript'

import { MoneroWalletListener } from 'monero-javascript'

// Listeners
export const createSyncProgressListener = (onSyncProgress: SyncProgressListener) =>
  new (class extends MoneroWalletListener {
    onSyncProgress(
      height: number,
      startHeight: number,
      endHeight: number,
      percentDone: number,
      message: string,
    ) {
      onSyncProgress(height, startHeight, endHeight, percentDone, message)
    }
  })() as MoneroWalletListener

export const createBalancesChangedListener = (onBalancesChanged: BalancesChangedListener) =>
  new (class extends MoneroWalletListener {
    onBalancesChanged(newBalance: BigInteger, newUnlockedBalance: BigInteger) {
      onBalancesChanged(newBalance, newUnlockedBalance)
    }
  })() as MoneroWalletListener

export const createOutputReceivedListener = (onOutputReceived: OutputReceivedListener) =>
  new (class extends MoneroWalletListener {
    onOutputReceived(output: any) {
      // onOutputReceived(output)
      let amount = output.getAmount()
      let txHash = output.getTx().getHash()
      let isConfirmed = output.getTx().isConfirmed()
      let isLocked = output.getTx().isLocked()
      onOutputReceived(output)
      return { amount, txHash, isConfirmed, isLocked }
    }
  })() as MoneroWalletListener
