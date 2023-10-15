import mongoose from "mongoose";
declare const readMyBusiness: (userId: string) => Promise<{
    status: string;
    data: {
        businesses: (mongoose.Document<unknown, {}, import("../../../../models/primary/business/business.schema").IBusiness> & import("../../../../models/primary/business/business.schema").IBusiness & {
            _id: mongoose.Types.ObjectId;
        })[];
    };
    details?: undefined;
} | {
    status: string;
    details: any;
    data?: undefined;
}>;
export default readMyBusiness;
