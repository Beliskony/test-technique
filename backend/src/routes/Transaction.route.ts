import { Router } from "express";
import { TransactionController } from "../controllers/TransactionController";
import { TransactionSchema } from "../schema/TransactionSchema";
import { transactionRequest } from "../middleware/TransactionMiddleware";
import { inject,injectable } from "inversify";
import { TYPES } from "../config/TYPES";

@injectable()
export class TransactionRouter{
    public router: Router;
    private transactionController: TransactionController;

    constructor(@inject(TYPES.TransactionController) transactionController: TransactionController){
        this.router= Router();
        this.transactionController= transactionController;
        this.initializaRoutes();
    }

    private initializaRoutes():void{
        this.router.post("/transfer",transactionRequest(TransactionSchema), this.transactionController.createTransaction.bind(this.transactionController))
        this.router.get("/account/:accountNumber/transactions", this.transactionController.getTransaction.bind(this.transactionController))
    }
}

