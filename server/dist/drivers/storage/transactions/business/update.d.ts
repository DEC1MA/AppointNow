import mongoose from "mongoose";
declare const update: (userId: string, businessId: string, name: string, about: string, location: string, phone: string, workingDays: number[], workingHours: {
    start: number;
    duration: number;
}[], duration: number) => Promise<{
    status: string;
    data: {
        business: mongoose.Document<unknown, {}, import("../../../../models/primary/business/business.schema").IBusiness> & import("../../../../models/primary/business/business.schema").IBusiness & {
            _id: mongoose.Types.ObjectId;
        };
    };
    details?: undefined;
} | {
    status: string;
    details: any;
    data?: undefined;
}>;
export default update;
