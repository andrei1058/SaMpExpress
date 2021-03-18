import { getLatestFactionActions } from "../../controllers/FactionController";
import { Request, Response } from 'express';
var express = require('express');
var router = express.Router();
var routeCache = require('route-cache');

router.get('/history', routeCache.cacheSeconds(40), async function (req: Request, res: Response) {
    let logs = await getLatestFactionActions();
    res.json({ logs })
});


module.exports = router;