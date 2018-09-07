module.exports = cd;

// Pass by copy
function cd(rootNode, context, values) {
  if (values.length === 0) {
    context.startNode = rootNode;
    return 'SUCC: REACHED ROOT';
  }

  if (values.length > 1)
    return 'ERR: BAD NUMBER OF ARGUMENTS';

  let startNode = context.startNode;
  //Navigate from root node
  if (values[0].charAt(0) === '/') {
    startNode = rootNode;
  }

  let paths = values[0].split('/');
  for (var i = 0; i < paths.length; i++) {
    if (paths[i] === '')
      continue;
    if (paths[i] === '..') {
      let nextNode = startNode.getParent();
      if (nextNode !== null)
        startNode = nextNode;
      continue;
    }

    let nextNode = startNode.getChild(paths[i]);
    if (typeof nextNode === 'string') {
      return nextNode;
    }
    //The node has been found, now making the node as the startNode
    startNode = nextNode;
  }
  context.startNode = startNode;
  return 'SUCC: REACHED';
}