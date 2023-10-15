declare const login: (token: string) => Promise<{
    status: string;
    details: string;
} | {
    status: string;
    details?: undefined;
}>;
export default login;
