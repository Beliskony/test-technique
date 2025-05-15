/*import { injectable, inject } from "inversify";
import AccountModel from "../models/Account.Model";
import { IAccount } from "../models/Account.Model";
import { TYPES } from "../config/TYPES";
import { TransactionService } from "./Transaction.service";
import { UserService } from "./User.service";

// Define the Account interface if not already defined elsewhere


@injectable()
export class AccountService {
    private accounts: IAccount[] = [];

    constructor(
        @inject(TYPES.TransactionService) private transactionService: TransactionService,
        @inject(TYPES.UserService) private userService: UserService
    ) {}

    public createAccount(userId: string, userOwner: string): IAccount {
        const user = this.userService.(userId);
        if (!user) throw new Error("User not found");

       
        this.accounts.push();
        return account;
    }

    public getAccountById(accountId: string): IAccount | undefined {
        return this.accounts.find(acc => acc.id === accountId);
    }

    public addTransaction(accountId: string, transactionId: string): void {
        const account = this.getAccountById(accountId);
        if (!account) throw new Error("Account not found");

        // Ici, il faudrait récupérer UNE transaction par son id, pas toutes
        // Correction :
        // const transaction = this.transactionService.getTransactionById(transactionId);
        // if (!transaction) throw new Error("Transaction not found");
        // account.transactions.push(transaction);

        // En attendant, on laisse la logique existante :
        const transaction = this.transactionService.getTransactionAll();
        if (!transaction) throw new Error("Transaction not found");

        account.transactions.push(Tras);
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
} */