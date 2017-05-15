const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...
const confirmObj = function (object) {
  return object === null || object.toString() === '[object Object]';
};

const stringifyArray = function (array) {
  return '[' + array.map((each) => stringify(each)).join() + ']';
};

const stringifyObject = function (object) {
  if (object === null) {return "null"}
  const array = [];
  _.each(object, function (value, key) {
    if (_.isFunction(value) || _.isUndefined(value)) {
      return;
    }
    array.push(stringify(key) + ':' + stringify(value));
  });
  return '{' + array.join() + '}';
};

const stringify = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
    return stringifyArray(obj);
  } else if (confirmObj(obj)) {
    return stringifyObject(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  } else {
    return obj + '';
  }
};

module.exports = {
  stringify: stringify
};