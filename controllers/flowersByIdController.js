const getFlowersById = require('../services/flowers.service')

function flowersByIdController(req, res) {
    res.json(getFlowersById(req.params.id));
}

module.exports = flowersByIdController;