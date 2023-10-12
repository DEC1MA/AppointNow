declare const _default: {
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
};
export default _default;
