
import mongoose, { Schema } from 'mongoose';

interface ISession {
    token: string;
    userId: mongoose.Types.ObjectId
}
let SessionSchema = new Schema<ISession>({
    token: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, required: true },
})

let Session

let prepare = () => {
    Session = mongoose.model<ISession>('Session', SessionSchema, 'Session')
}

export { Session, prepare }
