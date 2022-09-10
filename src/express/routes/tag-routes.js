'use strict';

const {Router} = require(`express`);
const tagRouter = new Router();

tagRouter.post(`/`, (req, res) => res.send(`POST /tag`));
tagRouter.get(`/:id`, (req, res) => res.send(`GET /tag/{id}`));
tagRouter.get(`/tag?sortByOrder&sortByName&offset=10&length=10`, (req, res) => res.send(`GET /tag?sortByOrder&sortByName&offset=10&length=10`));
tagRouter.put(`/:id`, (req, res) => res.send(`PUT /tag/{id}`));
tagRouter.delete(`/:id`, (req, res) => res.send(`DELETE /tag/{id}`));

module.exports = tagRouter;