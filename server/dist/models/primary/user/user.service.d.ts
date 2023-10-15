export declare class UserService {
    main(): string;
    register(body: {
        phone: string;
    }): Promise<{
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
    verify(body: {
        cCode: string;
        vCode: string;
    }): Promise<{
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
    complete(body: {
        cCode: string;
        firstName: string;
        lastName: string;
    }): Promise<{
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
    login(body: {
        token: string;
    }): Promise<{
        status: string;
        details: string;
    } | {
        status: string;
        details?: undefined;
    }>;
    connectTelegram(body: {
        token: string;
        firstName: string;
        lastName: string;
    }): Promise<{
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
}
