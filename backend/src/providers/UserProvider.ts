import { inject,injectable } from "inversify";
import { UserService } from "../servives/User.service";
import { IUser } from "../models/UserModel";
import { TYPES } from "../config/TYPES";


@injectable()
export class UserProvider {

    constructor(@inject(TYPES.UserService) private userService: UserService) {}
    

    async createUser(user: IUser): Promise<IUser> {
        return await this.userService.createUser(user);
    }

    async loginUser(email: string): Promise<IUser | null> {
        return await this.userService.loginUser(email);
    }
}