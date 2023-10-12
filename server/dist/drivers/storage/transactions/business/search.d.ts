import mongoose from "mongoose";
declare const search: (userId: string, query: string) => Promise<{
    status: string;
    details: string;
    data?: undefined;
} | {
    status: string;
    data: {
        businesses: (mongoose.Document<unknown, {}, import("../../../../models/primary/business/business.schema").IBusiness> & import("../../../../models/primary/business/business.schema").IBusiness & {
            _id: mongoose.Types.ObjectId;
        })[];
    };
    details?: undefined;
}>;
export default search;
