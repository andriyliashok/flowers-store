const Flower = require('../models/flower.model')

const flowers = [
    new Flower(1, 'Rose', true, 4),
    new Flower(2, 'Lily', false, 0),
    new Flower(3, 'Tulip', true, 1),
    new Flower(4, 'Orchid', true, 2),
]

module.exports = flowers;
