import { inject,injectable } from "inversify";
import { UserService } from "../servives/User.service";
import { ITransaction } from "../models/TransactionModel";
import { TYPES } from "../config/TYPES";
import { TransactionService } from "../servives/Transaction.service";

@injectable()
export class TransactionProvider {
    constructor(@inject(TYPES.TransactionService) private transactionService: TransactionService){}

    async createTransaction(Transaction: ITransaction): Promise<ITransaction>{
        return await this.transactionService.createTransaction(Transaction)
    }

    async deleteTransaction(Transaction: ITransaction): Promise<ITransaction | null>{
        return await this.transactionService.deleteTransaction(Transaction)
    }

    async getTransaction(Transaction: ITransaction): Promise<ITransaction[] | null>{
        return await this.transactionService.getTransactionAll()
    }

}