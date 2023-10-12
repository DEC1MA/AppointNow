declare const search: (userId: string, query: string) => Promise<{
    status: string;
    details: string;
    data?: undefined;
} | {
    status: string;
    data: {
        events: any;
    };
    details?: undefined;
}>;
export default search;
