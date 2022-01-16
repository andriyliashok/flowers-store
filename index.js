const flowersListController = require('./controllers/flowersListController.js');
const flowersByIdController = require('./controllers/flowersByIdController.js');
const orderFlowersController = require('./controllers/orderFlowersController.js');

const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/flowers', flowersListController);

app.get('/flowers/:id', flowersByIdController);

app.get('/flowers/:id/order', orderFlowersController);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})