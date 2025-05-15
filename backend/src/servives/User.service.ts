import UserModel, {IUser} from "../models/UserModel";
import { injectable } from "inversify";

@injectable()
export class UserService {
    async createUser(user: IUser): Promise<IUser> {
        const newUser = new UserModel(user);
        const existingUser = await UserModel.findOne({ email: user.email }).exec();
        if (existingUser) {
            throw new Error("cet User existe deja");
        }
        return await newUser.save();
    }



    async loginUser(email: string): Promise<IUser | null> {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw new Error("User inexistant");
        }   

        return user;
    }

    async getUserById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id).exec();
}
}