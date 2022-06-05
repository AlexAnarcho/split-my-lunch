import { Injectable } from '@nestjs/common'
import { MoneroUtils } from 'monero-javascript'
import { loadWallets } from 'src/YamlLoad'
import * as monerojs from 'monero-javascript'
import { find, propEq } from 'ramda'
import { createBalancesChangedListener } from './utils/wallet'

type Account = {
  name: string
  seed: string
  walletname: string
  password: string
}
@Injectable()
export class MoneroService {
  private rpcAddress = 'http://127.0.0.1:38083'
  private rpcUser = 'superuser'
  private rpcPassword = 'abctesting123'

  private async getWallet(user: string) {
    const accounts: Account[] = loadWallets()
    const { walletname: path, password } = findUser(user)(accounts) as Account

    console.log(path, password)
    const walletRpc = await monerojs.connectToWalletRpc(
      this.rpcAddress,
      this.rpcUser,
      this.rpcPassword,
    )
    const userWalletConfig = { path, password }
    const wallet = await walletRpc.openWallet(userWalletConfig)
    return wallet
  }

  async getSeedFromWallet(body) {
    const { walletname, password } = body
    const walletRpc = await monerojs.connectToWalletRpc(
      this.rpcAddress,
      this.rpcUser,
      this.rpcPassword,
    )

    const createdWallet = await walletRpc.createWallet({ path: walletname, password })
    const seed = await createdWallet.getMnemonic()

    return { walletRpc, createdWallet, seed }
  }

  async createInvoice(body) {
    console.log(body)
    const { user, label, amount } = body
    const wallet = await this.getWallet(user)
    const { state } = await wallet.createSubaddress(0, label)
    const { address, balance, index } = state
    const txUri = createMoneroTransactionUri({ address, amount, description: label })
    return { address, balance: MoneroUtils.atomicUnitsToXmr(balance), index, label, txUri }
  }

  async checkInvoice(body) {
    const { user, index } = body
    const wallet = await this.getWallet(user)
  }

  async getSubaddress(user: string, index: string) {
    const wallet = await this.getWallet(user)
    const { state } = await wallet.getSubaddress(0, Number(index))

    const { address, balance, label, isUsed } = state

    return { address, balance: MoneroUtils.atomicUnitsToXmr(balance), index, label, isUsed }
  }
}

export const findUser = (user: string) => find(propEq('name', user))

export const createMoneroTransactionUri = ({
  address,
  amount,
  description,
}: {
  address: string
  amount: number
  description: string
}) => {
  return `monero:${address}?tx_amount=${amount}&tx_description=${description}`
}
