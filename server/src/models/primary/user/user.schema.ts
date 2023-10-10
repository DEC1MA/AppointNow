
import mongoose, { Schema } from 'mongoose';

interface IUser {
    firstName: string;
    lastName: string;
    secret: any;
}
let UserSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    secret: { type: Schema.Types.Mixed },
})

let User;

let prepare = () => {
    User = mongoose.model<IUser>('User', UserSchema, 'User')
}

export { User, prepare }
