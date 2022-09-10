'use strict';

const express = require(`express`);

const userRoutes = require(`./routes/user-routes`);
const tagRoutes = require(`./routes/tag-routes`);
const mainRoutes = require(`./routes/main-routes`);

const port = 8080;

const app = express();

app.use(`/user`, userRoutes);
app.use(`/tag`, tagRoutes);
app.use(`/`, mainRoutes);

app.listen(port, (err) => {
  if (err) {
    return console.error(`Ошибка при создании сервера`, err);
  }

  return console.info(`Ожидаю соединений на ${port}`);
});
