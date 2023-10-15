declare const readFreeTimes: (businessId: string) => Promise<{
    status: string;
    details: string;
    data?: undefined;
} | {
    status: string;
    data: {
        reservedTimes: any;
    };
    details?: undefined;
}>;
export default readFreeTimes;
