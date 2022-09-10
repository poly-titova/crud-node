'use strict';

const express = require(`express`);
const {HttpCode} = require(`../../constants`);

const DEFAULT_PORT = 3000;

const app = express();
app.use(express.json());

app.get(`/user`, async (req, res) => {
  try {
    res.send(`user`);
  } catch (_err) {
    res.send([]);
  }
});

app.get(`/tag`, async (req, res) => {
    try {
      res.send(`tag`);
    } catch (_err) {
      res.send([]);
    }
  });

app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    app.listen(port, (err) => {
      if (err) {
        return console.error(`Ошибка при создании сервера`, err);
      }

      return console.info(`Ожидаю соединений на ${port}`);
    });
  }
};
