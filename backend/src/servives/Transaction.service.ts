import { injectable } from "inversify";
import TransactionModel,{ITransaction} from "../models/TransactionModel";

@injectable()
export class TransactionService {
    async createTransaction(Transaction: ITransaction): Promise<ITransaction>{
        const newTransaction = new TransactionModel(Transaction)
        return await newTransaction.save()
    }


    async deleteTransaction(Transaction: ITransaction): Promise<ITransaction | null>{
        return await TransactionModel.findByIdAndDelete(Transaction._id).exec()
    }

    async getTransactionAll(filter: Partial<ITransaction> = {}): Promise<ITransaction[]> {
    return await TransactionModel.find().exec();
}
}