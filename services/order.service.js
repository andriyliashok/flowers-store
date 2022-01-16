const flowers = require('../mocks/flowers.mock');

function getNewOrderId() {
    const sortedFlowers = flowers.sort(
        (current, prev) => current.id - prev.id
    )

    return ++sortedFlowers[sortedFlowers.length - 1].id
}

module.exports = {
    getNewOrderId,
}