import mongoose,{Document, Schema} from "mongoose";

export interface IAccount extends Document {
    _id: string;
    accountNumber: string;
    balance: number;
    UserOwner: string;
}

const AccountModel: Schema = new Schema<IAccount>({
    _id: {type: String, required: true, unique: true, trim: true},
    accountNumber: {type: String, required: true, unique: true, trim: true},
    balance: {type: Number, required: true},
    UserOwner: {type: String, required: true, trim: true},
});

export default mongoose.model<IAccount>("Account", AccountModel);