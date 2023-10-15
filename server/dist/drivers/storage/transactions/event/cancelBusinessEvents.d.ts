declare const cancelBusinessEvents: (userId: string, businessId: string) => Promise<{
    status: string;
    details?: undefined;
} | {
    status: string;
    details: any;
}>;
export default cancelBusinessEvents;
