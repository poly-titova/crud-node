'use strict';

const server = require(`./server`);

const Cli = {
  [server.name]: server,
};

module.exports = {
  Cli,
};
