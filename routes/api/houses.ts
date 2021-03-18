import { Router, Request, Response } from "express";
import { getOwnedHousesCount, getTotalHousesCount } from "../../controllers/HouseController";

var express = require('express');
var router: Router = express.Router();
var countCache = require('route-cache');

const availableCountQueries = ['owned', 'total'];

router.get('/count', async function (req: Request, res: Response) {
    res.status(400).json({
        types: availableCountQueries
    });
})

router.get('/count/:type', countCache.cacheSeconds(50), async function (req: Request, res: Response) {
    var response;
    switch (req.params.type) {
        case 'owned':
            response = await getOwnedHousesCount();
            break;
        case 'total':
            response = await getTotalHousesCount();
            break;
    }
    if (response != undefined) {
        res.json({
            amount: response
        });
    } else {
        res.status(400).json({
            types: availableCountQueries
        });
    }
});

module.exports = router;