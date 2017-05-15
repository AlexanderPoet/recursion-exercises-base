
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  if (node.childNodes.length !== 1) {
    node.childNodes.forEach((child) => visitAllNodes(child, callback));
  }
  return callback(node);
  
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  const array = [];
  const collect = function(val) {
    array.push(val);
  }
  visitAllNodes(node, collect);
  return array;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};