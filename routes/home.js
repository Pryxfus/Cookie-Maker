const express = require('express');
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookie-data");

const homeRouter = express.Router();

homeRouter

.get('/', (req, res) => {
  res.render('home/index', {
    cookie: {
      base: 'light',
      addons: ['coconut', 'honey'],
    },
    bases: Object.entries(COOKIE_BASES),
    addons: Object.entries(COOKIE_ADDONS),
    // @TODO: We need something to know what are the prces of selected base and addons...

  });
});

module.exports = {
  homeRouter,
}