module.exports = ls;

function ls(rootNode, context) {
  let childrens = context.startNode.getAllChildren();
  return childrens.join('\n');
}