import { Request, Response } from "express";
import { Router } from "express";

import { getOfflineUsers, getOnlineAdmins, getOnlineHelpers, getOnlineLeaders, getOnlineUsers, getRegisteredUsers, getTotalAdmins, getTotalHelpers, getTotalLeaders } from "../../controllers/UserController";

var express = require('express');
var routeCache = require('route-cache');
const router: Router = express.Router();

const availableTypes = ["online", "total", "offline", "admin", "admin_online", "helper", "helper_online", "leader", "leader_online"];

router.get('/count', async function (req: Request, res: Response) {
  res.json({ types: availableTypes }).status(400);
});

router.get('/count/:type', routeCache.cacheSeconds(50), async function (req: Request, res: Response) {

  let type = req.params.type;
  let amount;

  switch (type) {
    case 'online':
      amount = await getOnlineUsers();
      break;
    case 'total':
      amount = await getRegisteredUsers();
      break;
    case 'offline':
      amount = await getOfflineUsers();
      break;
    case 'admin':
      amount = await getTotalAdmins();
      break;
    case 'admin_online':
      amount = await getOnlineAdmins();
      break;
    case 'helper':
      amount = await getTotalHelpers();
    case 'helper_online':
      amount = await getOnlineHelpers();
      break;
    case 'leader':
      amount = await getTotalLeaders();
      break;
    case 'leader_online':
      amount = await getOnlineLeaders();
      break;
  }

  if (amount != undefined) {
    res.json({
      amount: amount
    });
  } else {
    res.status(400).json({
      types: availableTypes
    });
  }
});

module.exports = router;