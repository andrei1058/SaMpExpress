import { Request, Response } from 'express';
import { getUser } from '../../controllers/UserController';
import { loggedOutVerifyJWT } from '../../middlewares/JwtVerify';
var express = require('express');
var router = express.Router();
var md5 = require('md5');
var jwt = require('jsonwebtoken');

router.post('/login', loggedOutVerifyJWT, async function (req: Request, res: Response) {
    if (!(req.body.username || req.body.password)) {
        return res.json({
            auth: false,
            message: "Provide username and password"
        }).status(400)
    }
    let username = req.body.username;
    let password = await md5(req.body.password).toUpperCase();

    let account = await getUser(username);
    
    if (account) {
        if (password === account.playerPassword) {
            let id = account.playerID;
            account.playerPassword = "";
            let token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
                expiresIn: 86400
            });
            res.json({
                auth: true,
                message: "Logged in",
                token: token,
                user: account
            }).redirect("/")
        } else {
            res.json({
                auth: false,
                message: "Wrong password"
            }).status(401);
        }
    } else {
        res.json({
            auth: false,
            message: "User not found"
        }).status(404);
    }
});


module.exports = router;