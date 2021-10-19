import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({ errorCode: "Token.invalid", })
    }

    //token = Bearer 68464564878974654654jfjfg

    const [, token] = authToken.split(" ");

    try {
        console.log('ok')
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayLoad
        // console.log('ok')
        request.user_id = sub

        return next();

    } catch (err) {
        return response.status(401).json({ errorCode: "Token.expired", })

    }

}