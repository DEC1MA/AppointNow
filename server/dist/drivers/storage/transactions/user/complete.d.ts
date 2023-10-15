declare const complete: (cCode: string, firstName: string, lastName: string) => Promise<{
    status: string;
    data: {
        user: any;
        session: any;
    };
    details?: undefined;
} | {
    status: string;
    details: any;
    data?: undefined;
}>;
export default complete;
