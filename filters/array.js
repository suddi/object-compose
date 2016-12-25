'use strict';

const _ = require('lodash');

/**
 * Flatten an input Array
 * @param  {*} input - current value
 * @param  {Object} object - input object into mapper
 * @param  {boolean} [flattenDeep] - whether to flatten recursively or not (default: false)
 * @return {Array} flattened Array
 *
 * @example
 * flatten(4) // => []
 * flatten(true) // => []
 * flatten(Infinity) // => []
 * flatten(null) // => []
 * flatten() // => []
 * flatten(NaN) // []
 * flatten(4.5) // => []
 * flatten([3, 4, 5]) // => [3, 4, 5]
 * flatten('hello') // => ['h', 'e', 'l', 'l', 'o']
 * flatten({answer: 42}) // => []
 * flatten(function () {}) // => []
 * flatten([[3], [[4], 5], [[[[[6]]]]]]) // => [3, [4], 5, [[[[6]]]]]
 * flatten([[3], [[4], 5], [[[[[6]]]]]], {}, true) // => [3, 4, 5, 6]
 */
function flatten(input, object, flattenDeep) {
    if (flattenDeep) {
        return _.flattenDeep(input);
    }
    return _.flatten(input);
}

/**
 * Retrive only unique values from an Array
 * @param  {*} input - current value
 * @return {Array} set of unique elements
 *
 * @example
 * unique(4) // => []
 * unique(true) // => []
 * unique(Infinity) // => []
 * unique(null) // => []
 * unique() // => []
 * unique(NaN) // []
 * unique(4.5) // => []
 * unique([3, 4, 5]) // => [3, 4, 5]
 * unique('hello') // => ['h', 'e', 'l', 'o']
 * unique({answer: 42}) // => []
 * unique(function () {}) // => []
 * unique([4, 3, 4, 2, [3]]) // => [4, 3, 2, [3]]
 */
function unique(input) {
    return _.uniq(input);
}

/**
 * Sum up elements in an Array
 * @param  {*} input - current value
 * @return {int|float} sum of elements in Array
 *
 * @example
 * sum(4) // => 0
 * sum(true) // => 0
 * sum(Infinity) // => 0
 * sum(null) // => 0
 * sum() // => 0
 * sum(NaN) // 0
 * sum(4.5) // => 0
 * sum([3, 4, 5]) // => 12
 * sum('hello') // => 'hello'
 * sum({answer: 42}) // => 0
 * sum(function () {}) // => 0
 */
function sum(input) {
    return _.sum(input);
}

/**
 * Retrieve the nth child from an Array
 * @param  {*} input - current value
 * @param  {Object} object - input object into mapper
 * @param  {int} [index] - index to retrieve (default: 0)
 * @return {*} retrieved element
 *
 * @example
 * child(4) // =>
 * child(true) // =>
 * child(Infinity) // =>
 * child(null) // =>
 * child() // =>
 * child(NaN) // =>
 * child(4.5) // =>
 * child([3, 4, 5]) // => 3
 * child('hello') // => 'h'
 * child({answer: 42}) // =>
 * child(function () {}) // =>
 * child([4, 3, 4, 3], {}, 3) // => 3
 * child([4, 3, 4, 3], {}, 5) // =>
 * child([4, 3, 4, 3], {}, -2) // => 4
 */
function child(input, object, index) {
    return _.nth(input, index);
}

module.exports = {
    flatten: flatten,
    unique: unique,
    sum: sum,
    child: child
};
