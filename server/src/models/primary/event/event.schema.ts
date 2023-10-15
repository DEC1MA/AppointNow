
import mongoose, { Schema } from 'mongoose';

interface IEvent {
    startTime: Number;
    userId: Schema.Types.ObjectId;
    businessId: Schema.Types.ObjectId
}
let EventSchema = new Schema<IEvent>({
    startTime: { type: Number, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    businessId: { type: Schema.Types.ObjectId , required: true }
})

let Event;

let prepare = () => {
    Event = mongoose.model<IEvent>('Event', EventSchema, 'Event')
}

export { Event, prepare }
