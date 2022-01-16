const flowers = require("../mocks/flowers.mock");

function getFlowersById(id) {
  return flowers.find((item) => item.id === Number(id));
}

module.exports = getFlowersById;