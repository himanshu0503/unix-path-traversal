module.exports = session;

function session(rootNode, context, values) {
  if (values[0] !== 'clear')
    return 'ERR: COMMAND NOT FOUND';

  let childrens = rootNode.getAllChildren();
  childrens.forEach(function(val) {
    //Deleting all the children
    rootNode.deleteChild(val);
  });
  context.startNode = rootNode;
  return 'SUCC: CLEARED: RESET TO ROOT';
}