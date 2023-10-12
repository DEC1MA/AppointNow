
import mongoose, { Schema } from 'mongoose';

interface IBusiness {
    ownerId: Schema.Types.ObjectId,
    name: string,
    about: string,
    location: string,
    phone: string,
    workingDays: number[],
    workingHours: Array<{ start: number, duration: number }>,
    duration: number,
}
let BusinessSchema = new Schema<IBusiness>({
    ownerId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    about: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    workingDays: { type: [], required: true },
    workingHours: { type: [], required: true },
    duration: Number,
})

let Business: mongoose.Model<IBusiness>;

let prepare = () => {
    Business = mongoose.model<IBusiness>('Business', BusinessSchema, 'Business')
}

export { IBusiness, Business, prepare }
