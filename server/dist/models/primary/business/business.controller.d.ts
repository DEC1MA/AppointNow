import { BusinessService } from './business.service';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    main(): string;
    create(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    update(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    search(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    readMyBusiness(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
}
