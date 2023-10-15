declare const _default: {
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
export default _default;
