import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare let Sessions: {
    putSession: (token: string, userId: string) => void;
    deleteSession: (token: string) => void;
};
export declare class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
