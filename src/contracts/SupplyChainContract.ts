import { TransactionResponse } from "@ethersproject/abstract-provider";
import { ethers } from "ethers";
import BaseInterface from "./interfaces/BaseInterface";
import { RPC_TESTNET, SUPPLYCHAIN_ADDRESS, getAbiSupplyChain } from "./config";

export default class SupplyChainContract extends BaseInterface {
   constructor(provider?: ethers.providers.Web3Provider) {
      const rpcProvider = new ethers.providers.JsonRpcProvider(RPC_TESTNET);
      super(provider || rpcProvider, SUPPLYCHAIN_ADDRESS, getAbiSupplyChain());
      if (!provider) {
         this._contract = new ethers.Contract(this._contractAddress, this._abi, rpcProvider);
      }
   }

   async getProductByCode(code: string) {
      const product = await this._contract.getProductByCode(code);
      return product;
   }

   async getProductCount() {
      const count = await this._contract.getProductCount();
      return count._toNumber();
   }

   async getProductState() {
      const productState = await this._contract.getProductState();
      return productState;
   }

   async getProducts() {
      const products = await this._contract.getProducts();
      return products;
   }
}