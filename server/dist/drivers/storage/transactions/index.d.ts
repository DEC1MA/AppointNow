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
declare const _default: {
    user: {
        register: (phone: string) => Promise<{
            status: string;
            data: {
                clientCode: any;
                verificationCode: any;
            };
            details?: undefined;
        } | {
            status: string;
            details: any;
            data?: undefined;
        }>;
        verify: (cCode: string, vCode: string) => Promise<{
            status: string;
            data: {
                clientCode: any;
            };
            details?: undefined;
        } | {
            status: string;
            details: any;
            data?: undefined;
        }>;
        complete: (cCode: string, firstName: string, lastName: string) => Promise<{
            status: string;
            data: {
                user: any;
                session: any;
            };
            details?: undefined;
        } | {
            status: string;
            details: any;
            data?: undefined;
        }>;
        login: (token: string) => Promise<{
            status: string;
            details: string;
        } | {
            status: string;
            details?: undefined;
        }>;
        connectTelegram: (token: string, firstName: string, lastName: string) => Promise<{
            status: string;
            data: {
                session: any;
                user: any;
            };
            details?: undefined;
        } | {
            status: string;
            details: any;
            data?: undefined;
        }>;
    };
    business: {
        create: (userId: string, name: string, about: string, location: string, phone: string, workingDays: number[], workingHours: {
            start: number;
            duration: number;
        }[], duration: number) => Promise<{
            status: string;
            data: {
                business: import("mongoose").Document<unknown, {}, import("../../../models/primary/business/business.schema").IBusiness> & import("../../../models/primary/business/business.schema").IBusiness & {
                    _id: import("mongoose").Types.ObjectId;
                };
            };
            details?: undefined;
        } | {
            status: string;
            details: any;
            data?: undefined;
        }>;
        update: (userId: string, businessId: string, name: string, about: string, location: string, phone: string, workingDays: number[], workingHours: {
            start: number;
            duration: number;
        }[], duration: number) => Promise<{
            status: string;
            data: {
                business: import("mongoose").Document<unknown, {}, import("../../../models/primary/business/business.schema").IBusiness> & import("../../../models/primary/business/business.schema").IBusiness & {
                    _id: import("mongoose").Types.ObjectId;
                };
            };
            details?: undefined;
        } | {
            status: string;
            details: any;
            data?: undefined;
        }>;
        readMyBusiness: (userId: string) => Promise<{
            status: string;
            data: {
                businesses: (import("mongoose").Document<unknown, {}, import("../../../models/primary/business/business.schema").IBusiness> & import("../../../models/primary/business/business.schema").IBusiness & {
                    _id: import("mongoose").Types.ObjectId;
                })[];
            };
            details?: undefined;
        } | {
            status: string;
            details: any;
            data?: undefined;
        }>;
        search: (userId: string, query: string) => Promise<{
            status: string;
            details: string;
            data?: undefined;
        } | {
            status: string;
            data: {
                businesses: (import("mongoose").Document<unknown, {}, import("../../../models/primary/business/business.schema").IBusiness> & import("../../../models/primary/business/business.schema").IBusiness & {
                    _id: import("mongoose").Types.ObjectId;
                })[];
            };
            details?: undefined;
        }>;
    };
    event: {
        cancel: (userId: string, eventId: string) => Promise<{
            status: string;
            details?: undefined;
        } | {
            status: string;
            details: any;
        }>;
        cancelBusinessEvents: (userId: string, businessId: string) => Promise<{
            status: string;
            details?: undefined;
        } | {
            status: string;
            details: any;
        }>;
        cancelUserEvents: (userId: string) => Promise<{
            status: string;
            details?: undefined;
        } | {
            status: string;
            details: any;
        }>;
        create: (userId: string, businessId: string, startTime: number) => Promise<{
            status: string;
            data: {
                event: any;
            };
            details?: undefined;
        } | {
            status: string;
            details: any;
            data?: undefined;
        }>;
        search: (userId: string, query: string) => Promise<{
            status: string;
            details: string;
            data?: undefined;
        } | {
            status: string;
            data: {
                events: any;
            };
            details?: undefined;
        }>;
        readFreeTimes: (businessId: string) => Promise<{
            status: string;
            details: string;
            data?: undefined;
        } | {
            status: string;
            data: {
                reservedTimes: any;
            };
            details?: undefined;
        }>;
    };
};
export default _default;
