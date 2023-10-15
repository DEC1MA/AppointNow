import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    main(): string;
    register(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    verify(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    complete(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    login(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
    connectTelegram(body: any): Promise<{
        status: string;
        data?: any;
        details?: any;
    }>;
}
