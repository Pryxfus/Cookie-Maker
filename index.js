const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const {homeRouter} = require("./routes/home");
const {configuratorRouter} = require("./routes/configurator");
const {orderRouter} = require("./routes/order");
const {handlebarsHelpers} = require("./handlebars-helpers");

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.engine('.hbs', hbs({
  extname: '.hbs',
  helpers: handlebarsHelpers, // plik gdzie znajdują się pomocne pliki dla handlebars
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/cnfigurator', configuratorRouter);
app.use('/order', orderRouter);


app.listen(3000, 'localhost');