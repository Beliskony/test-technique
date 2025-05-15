import { inject,injectable } from "inversify";
import { Request, Response } from "express";
import { TransactionProvider } from "../providers/TransactionProvider";
import { TYPES } from "../config/TYPES";


@injectable()
export class TransactionController{
    constructor(@inject(TYPES.TransactionProvider) private transProvider:TransactionProvider){}

    //createTransac
    async createTransaction(req:Request, res:Response): Promise<void>{
        try {
            const transaction = await this.transProvider.createTransaction(req.body)
             res.status(201).json(transaction)
            
        } catch (error) {
            res.status(400).json(error)
        }
    }

  //deleteTransac
  async deleteTransaction (req:Request, res:Response): Promise<void>{
    try {
        const {id} = req.params
        const deleted = await this.transProvider.deleteTransaction({_id:id} as any)
        if (!deleted) {
        res.status(404).json({ message: "Transaction not found" });
      } else {
        res.status(200).json({ message: "Transaction deleted", deleted });
      }
    } catch (error) {
        res.status(400).json({ message: error });
    }
  }

  //getallTransaction
  async getTransaction (req:Request, res:Response): Promise<void>{
    try {
          const transactions = await this.transProvider.getTransaction({} as any);
      res.status(200).json(transactions);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
    
  }
}
