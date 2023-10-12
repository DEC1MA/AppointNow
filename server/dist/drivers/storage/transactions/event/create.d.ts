declare const create: (userId: string, businessId: string, startTime: number) => Promise<{
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
export default create;
