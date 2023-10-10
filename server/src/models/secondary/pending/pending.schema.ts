
import mongoose, { Schema } from 'mongoose';

interface IPending {
    phone: string;
    vcoide: string,
    cCode: string
}
let PendingSchema = new Schema<IPending>({
    phone: { type: String, required: true, unique: true },
    vcoide: { type: String, required: true },
    cCode: { type: String, required: true },
})

let Pending

let prepare = () => {
    Pending = mongoose.model<IPending>('Pending', PendingSchema, 'Pending')
}

export { Pending, prepare }
