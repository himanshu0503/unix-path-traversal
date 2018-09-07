module.exports = ls;
//TODO: Support ls of multiple directories
function ls(rootNode, context) {
  let childrens = context.startNode.getAllChildren();
  return childrens.join('\n');
}