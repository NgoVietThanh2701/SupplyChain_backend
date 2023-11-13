import { TransactionResponse } from "@ethersproject/abstract-provider";
import { ethers } from "ethers";
import BaseInterface from "./interfaces/BaseInterface";
import { RPC_TESTNET, CROWDSALE_ADDRESS, getAbiCrowSale } from "./config";

export default class CrowdSaleContract extends BaseInterface {
   constructor(provider?: ethers.providers.Web3Provider) {
      const rpcProvider = new ethers.providers.JsonRpcProvider(RPC_TESTNET);
      super(provider || rpcProvider, CROWDSALE_ADDRESS, getAbiCrowSale());
      if (!provider) {
         this._contract = new ethers.Contract(this._contractAddress, this._abi, rpcProvider);
      }
   }

   async getBnbRate(): Promise<number> {
      const rate = await this._contract.BNB_rate();
      return this._toNumber(rate);
   }

   async buyTokenByBnB(amount: number) {
      const rate = await this.getBnbRate();
      const tx: TransactionResponse = await this._contract.buyTokenByBNB({
         ...this._options,
         value: this._parseToEth(amount / rate),
      });
      return this._handleTransactionResponse(tx);
   }
}