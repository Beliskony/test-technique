import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserRequest } from "../middleware/UserMiddleware";
import { UserSchema } from "../schema/UserSchema";
import { inject,injectable } from "inversify";
import { TYPES } from "../config/TYPES";

@injectable()
export class UserRouter{
    public router: Router;
    private userController: UserController;

    constructor(@inject(TYPES.UserController) userController: UserController){
        this.router= Router();
        this.userController= userController;
        this.initializaRoutes();
    }

    private initializaRoutes():void{
        this.router.post("/user/create",UserRequest(UserSchema), this.userController.createUser.bind(this.userController))
        this.router.post("/user/login",this.userController.loginUser.bind(this.userController))
        
    }
}

