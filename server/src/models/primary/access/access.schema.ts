
import mongoose, { Schema } from 'mongoose';

interface IAccess {
    firstName: string;
    lastName: string;
    secret: object;
}
let AccessSchema = new Schema<IAccess>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    secret: { type: Schema.Types.Mixed },
})

let Access;

let prepare = () => {
    Access = mongoose.model<IAccess>('Access', AccessSchema, 'Access')
}

export { Access, prepare }
