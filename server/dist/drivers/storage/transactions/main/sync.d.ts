declare const sync: (userId: string) => Promise<{
    status: string;
    details: string;
    data?: undefined;
} | {
    status: string;
    data: {
        user: any;
        events: any;
    };
    details?: undefined;
}>;
export default sync;
