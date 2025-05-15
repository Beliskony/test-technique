import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    _id: string;
    email: string;
    name: string;
  
    
}

const UserModel: Schema = new Schema<IUser>({
    _id: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true },
    
    
});

export default mongoose.model<IUser>('User', UserModel);