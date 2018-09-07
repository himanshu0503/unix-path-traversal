module.exports = ls;

function ls(rootNode, context, values) {
  if (values.length === 0) {
    let childrens = context.startNode.getAllChildren();
    return childrens.join('\n');
  }

  let result = '';
  values.forEach(function(val) {
    let startNode = context.startNode;
    //We need to create directory at the root index
    if (val.charAt(0) === '/') {
      startNode = rootNode;
    }

    let dirs = val.split('/');
    //Traverse through the dirs till the location
    for (var i = 0; i < dirs.length; i++) {
      //User can pass like dir//dir2 so we need to skip that
      if (dirs[i] === '')
        continue;
      if (dirs[i] === '.')
        continue;
      if (dirs[i] === '..') {
        startNode = startNode.getParent();
        continue;
      }

      let nextNode = startNode.getChild(dirs[i]);
      if (typeof nextNode === 'string') {
        result.push(nextNode);
        return;
      }
      //The node has been found, now making the node as the startNode
      startNode = nextNode;
    }
    let childrens = startNode.getAllChildren().join('\t');
    result += `${val}:\n${childrens}\n`
  });
  return result;
}