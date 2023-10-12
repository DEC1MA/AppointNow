import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    main(): string;
    create(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    search(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    cancel(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    cancelUserEvents(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    cancelBusinessEvents(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
}
