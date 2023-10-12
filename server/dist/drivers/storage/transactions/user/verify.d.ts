declare const verify: (cCode: string, vCode: string) => Promise<{
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
export default verify;
