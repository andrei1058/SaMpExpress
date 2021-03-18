import { Router } from "express";
import { Request, Response } from "express";
import { getModelsCount, getOwnedCarsCount } from "../../controllers/CarController";

var express = require('express');
const router: Router = express.Router();
const routeCache = require('route-cache');

const availableCountQueries = ['owned', 'models'];

router.get('/count', async function (req: Request, res: Response) {
  res.status(400).json({
    types: availableCountQueries
  });
});

router.get('/count/:type', routeCache.cacheSeconds(50), async function (req: Request, res: Response) {
  var response;
  switch (req.params.type) {
    case 'owned':
      response = await getOwnedCarsCount();
      break;
    case 'models':
      response = await getModelsCount();
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