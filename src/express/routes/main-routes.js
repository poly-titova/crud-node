'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();

mainRouter.post(`/signin`, (req, res) => res.send(`POST /signin`));
mainRouter.post(`/login`, (req, res) => res.send(`POST /login`));
mainRouter.post(`/logout`, (req, res) => res.send(`POST /logout`));

module.exports = mainRouter;