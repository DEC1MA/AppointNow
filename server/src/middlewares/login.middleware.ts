
import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

let sessions = {};
export let Sessions = {
    putSession: (token: string, userId: string) => {
        sessions[token] = userId
    },
    deleteSession: (token: string) => {
        delete sessions[token]
    }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        let token = req.get('token');
        let userId = sessions[token];
        if (userId) {
            req.body.userId = userId;
            next();
        }
    }
}
