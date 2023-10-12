declare const cancelUserEvents: (userId: string) => Promise<{
    status: string;
    details?: undefined;
} | {
    status: string;
    details: any;
}>;
export default cancelUserEvents;
