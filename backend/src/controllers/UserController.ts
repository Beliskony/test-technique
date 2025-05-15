import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { UserProvider } from '../providers/UserProvider';
import { TYPES } from '../config/TYPES';



@injectable()
export class UserController {
    constructor(
        @inject(TYPES.UserProvider) private userProvider: UserProvider){}
   
  //createUser
  async createUser(req:Request, res:Response): Promise<void>{

    try {
        const user = await this.userProvider.createUser(req.body)
        res.status(201).json(user._id)
    } catch (error) {
        res.status(400).json(error)
    }
    }

//loginUser
async loginUser(req: Request, res: Response): Promise<void> {
        try {
            const { email } = req.body;
            const user = await this.userProvider.loginUser(email);
            res.status(200).json(user);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}

