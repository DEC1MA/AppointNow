import mongoose, { Schema } from 'mongoose';
interface IBusiness {
    ownerId: Schema.Types.ObjectId;
    name: string;
    about: string;
    location: string;
    phone: string;
    workingDays: number[];
    workingHours: Array<{
        start: number;
        duration: number;
    }>;
    duration: number;
}
declare let Business: mongoose.Model<IBusiness>;
declare let prepare: () => void;
export { IBusiness, Business, prepare };
