import {
   TransactionResponse,
} from "@ethersproject/abstract-provider";
import { BigNumber, ethers, Overrides } from 'ethers';
import Exceptions from "../../HttpResponse/Exception";

export default class BaseInterface {
   _provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;
   _contractAddress: string;
   _abi: ethers.ContractInterface;
   _contract: ethers.Contract;
   _options: Overrides;

   constructor(
      provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider,
      address: string,
      abi: ethers.ContractInterface
   ) {
      this._provider = provider;
      this._contractAddress = address;
      this._abi = abi;
      this._options = { gasLimit: 300000 };
      this._contract = new ethers.Contract(address, abi, provider.getSigner());
   }

   _handleTransactionResponse = async (tx: TransactionResponse) => {
      try {
         const recept = await tx.wait();
         return recept.transactionHash;
      } catch (error: any) {
         throw new Exceptions(error.message);
      }
   }

   _parseToEth = (amount: number) => {
      return ethers.utils.parseEther(amount.toString());
   }

   _formatToEth = (bigNumber: BigNumber) => {
      return Number.parseFloat(ethers.utils.formatEther(bigNumber))
   }

   _toWei = (amount: number) => {
      return ethers.utils.parseUnits(amount.toString());
   }

   _toNumber = (bigNumber: BigNumber) => {
      try {
         return bigNumber.toNumber();
      } catch (error) {
         return Number.parseFloat(ethers.utils.formatEther(bigNumber));
      }
   }
}