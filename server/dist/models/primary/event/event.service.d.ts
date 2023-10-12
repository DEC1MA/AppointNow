export declare class EventService {
    main(): string;
    cancel(body: {
        userId: string;
        eventId: string;
    }): Promise<{
        status: string;
        details?: undefined;
    } | {
        status: string;
        details: any;
    }>;
    cancelBusinessEvents(body: {
        userId: string;
        businessId: string;
    }): Promise<{
        status: string;
        details?: undefined;
    } | {
        status: string;
        details: any;
    }>;
    cancelUserEvents(body: {
        userId: string;
    }): Promise<{
        status: string;
        details?: undefined;
    } | {
        status: string;
        details: any;
    }>;
    create(body: {
        userId: string;
        businessId: string;
        startTime: number;
    }): Promise<{
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
            events: any;
        };
        details?: undefined;
    }>;
}
