const { sendErrorResponse, sendSuccessResponse, sendResponse } = require('../services/response.service')
const getFlowersById = require('../services/flowers.service')
const { getNewOrderId } = require('../services/order.service')
const Order = require('../models/order.model')

function orderFlowersController(req, res) {
    const { id } = req.params;
    const { quantity } = req.query;
    const flower = getFlowersById(id);

    if (!flower.available) {
        sendErrorResponse(res, `Flowers "${flower.title}" are out of stock`)
        return
    }

    if (quantity > flower.quantity) {
        sendErrorResponse(res, `We don't have enough flowers, please try to order less`)
        return
    }

    sendSuccessResponse(
        res,
        new Order(getNewOrderId(), flower.title, quantity),
        201,
    )
}

module.exports = orderFlowersController