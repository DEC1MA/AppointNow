declare const cancel: (userId: string, eventId: string) => Promise<{
    status: string;
    details?: undefined;
} | {
    status: string;
    details: any;
}>;
export default cancel;
