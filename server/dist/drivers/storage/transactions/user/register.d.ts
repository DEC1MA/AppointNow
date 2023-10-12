declare const register: (phone: string) => Promise<{
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
export default register;
