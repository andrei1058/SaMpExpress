import { Router } from "express";

const router : Router = Router();

var usersRouter = require('./api/users');
var carsRouter = require('./api/vehicles');
var housesRouter = require('./api/houses');
var factionsRouter = require('./api/factions');
var authRouter = require('./api/auth');

router.use('/users', usersRouter);
router.use('/cars', carsRouter);
router.use('/houses', housesRouter);
router.use('/factions', factionsRouter);
router.use('/auth', authRouter);

module.exports = router;