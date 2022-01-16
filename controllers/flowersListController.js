const flowers = require('../mocks/flowers.mock');

function flowersListController(req, res) {
    res.json(flowers.filter((item)=> item.available));
}

module.exports = flowersListController;