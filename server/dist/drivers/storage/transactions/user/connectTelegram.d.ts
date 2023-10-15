declare const connectTelegram: (token: string, firstName: string, lastName: string) => Promise<{
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
export default connectTelegram;
