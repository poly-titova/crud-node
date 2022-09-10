'use strict';

const {Router} = require(`express`);
const userRouter = new Router();

userRouter.get(`/`, (req, res) => res.send(`GET /user`));
userRouter.put(`/`, (req, res) => res.send(`PUT /user`));
userRouter.delete(`/`, (req, res) => res.send(`DELETE /user`));
userRouter.post(`/tag`, (req, res) => res.send(`POST /user/tag`));
userRouter.delete(`/tag/:id`, (req, res) => res.send(`DELETE /user/tag/{id}`));
userRouter.get(`/tag/my`, (req, res) => res.send(`GET /user/tag/my`));

module.exports = userRouter;