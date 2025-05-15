import mongoose, {Document, Schema} from "mongoose";

export interface ITransaction extends Document {
    _id: string;
    accountSender: string;
    accountReceiver: string;
    balance: number;
    CreatedAt: Date;
}

const TransactionModel: Schema = new Schema<ITransaction>({
    _id: {type: String, required: true, unique: true, trim: true},
    accountSender: {type: String, required: true, trim: true},
    accountReceiver: {type: String, required: true, trim: true},
    balance: {type: Number, required: true},
    CreatedAt: {type: Date, default: Date.now},
});

export default mongoose.model<ITransaction>("Transaction", TransactionModel);
