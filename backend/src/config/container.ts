import { Container } from "inversify";
import { TYPES } from "./TYPES";
import { UserService } from "../servives/User.service";
import { UserProvider } from "../providers/UserProvider";
import { UserController } from "../controllers/UserController";
import { TransactionProvider } from "../providers/TransactionProvider";
import { TransactionService } from "../servives/Transaction.service";
import { TransactionController } from "../controllers/TransactionController";
import { UserRouter } from "../routes/User.route";
import { TransactionRouter } from "../routes/Transaction.route";


export const container = new Container()

container.bind(TYPES.UserService).to(UserService).inSingletonScope();
container.bind(TYPES.UserProvider).to(UserProvider).inSingletonScope();
container.bind(TYPES.UserController).to(UserController).inSingletonScope();


container.bind(TYPES.TransactionService).to(TransactionService).inSingletonScope();
container.bind(TYPES.TransactionProvider).to(TransactionProvider).inSingletonScope();
container.bind(TYPES.TransactionController).to(TransactionController).inSingletonScope();



container.bind(TYPES.TransactionRouter).to(TransactionRouter).inSingletonScope();
container.bind(TYPES.UserRouter).to(UserRouter).inSingletonScope();
