/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class BusinessService {
    main(): string;
    create(body: {
        userId: string;
        name: string;
        about: string;
        location: string;
        phone: string;
        workingDays: Array<any>;
        workingHours: Array<any>;
        duration: number;
    }): Promise<{
        status: string;
        data: {
            business: import("mongoose").Document<unknown, {}, import("./business.schema").IBusiness> & import("./business.schema").IBusiness & {
                _id: import("mongoose").Types.ObjectId;
            };
        };
        details?: undefined;
    } | {
        status: string;
        details: any;
        data?: undefined;
    }>;
    update(body: {
        userId: string;
        name: string;
        about: string;
        location: string;
        phone: string;
        workingDays: Array<any>;
        workingHours: Array<any>;
        duration: number;
        businessId: string;
    }): Promise<{
        status: string;
        data: {
            business: import("mongoose").Document<unknown, {}, import("./business.schema").IBusiness> & import("./business.schema").IBusiness & {
                _id: import("mongoose").Types.ObjectId;
            };
        };
        details?: undefined;
    } | {
        status: string;
        details: any;
        data?: undefined;
    }>;
    search(body: {
        userId: string;
        query: string;
    }): Promise<{
        status: string;
        details: string;
        data?: undefined;
    } | {
        status: string;
        data: {
            businesses: (import("mongoose").Document<unknown, {}, import("./business.schema").IBusiness> & import("./business.schema").IBusiness & {
                _id: import("mongoose").Types.ObjectId;
            })[];
        };
        details?: undefined;
    }>;
    readMyBusiness(body: {
        userId: string;
    }): Promise<{
        status: string;
        data: {
            businesses: (import("mongoose").Document<unknown, {}, import("./business.schema").IBusiness> & import("./business.schema").IBusiness & {
                _id: import("mongoose").Types.ObjectId;
            })[];
        };
        details?: undefined;
    } | {
        status: string;
        details: any;
        data?: undefined;
    }>;
}
