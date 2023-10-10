
import mongoose, { Schema } from 'mongoose';

interface IRoom {
    firstName: string;
    lastName: string;
    secret: object;
}
let UserSchema = new Schema<IRoom>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    secret: { type: Schema.Types.Mixed },
})

let Room;

let prepare = () => {
    Room = mongoose.model<IRoom>('Room', UserSchema, 'Room')
}

export { Room, prepare }
