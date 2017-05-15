const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  // Your code here
  const allEls = flattenTreeToArray(root);
  return allEls.filter((el) => el.id === id)[0];
};

const getElementsByClassName = function(root, className) {
  // Your code here
  const regexp = new RegExp(className);
  const allEls = flattenTreeToArray(root);
  return allEls.filter((el) => el.className === className || regexp.test(el.className));
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  const allEls = flattenTreeToArray(root);
  return allEls.filter((el) => el.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
