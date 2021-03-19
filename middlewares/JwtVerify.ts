import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

export const loggedInVerifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.json({ message: "Please provide a token" }).status(400);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
        if (err) {
            res.json({
                auth: false,
                message: "Failed to authenticate"
            }).status(401);
        } else {
            req.body.userId = decoded.id;
            req.body.userName = decoded.username;
            next();
        }
    })
}

export const loggedOutVerifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["x-access-token"];
    if (token) {
        return res.json({ message: "You already have a token" }).status(401);
    }
    next();
}