module.exports = rm;
//TODO: what is we are deleting the same dir?

function rm(rootNode, context, values) {
  if (values.length === 0)
    return 'ERR: CANNOT RECOGNIZE INPUT';
  let result = [];
  values.forEach(function(val) {
    let startNode = context.startNode;
    //We need to create directory at the root index
    if (val.charAt(0) === '/') {
      startNode = rootNode;
    }

    let dirs = val.split('/');
    //Traverse through the dirs till the location
    for (var i = 0; i < dirs.length - 1; i++) {
      //User can pass like dir//dir2 so we need to skip that
      if (dirs[i] === '')
        continue;
      let nextNode = startNode.getChild(dirs[i]);
      if (typeof nextNode === 'string') {
        result.push(nextNode);
        return;
      }
      //The node has been found, now making the node as the startNode
      startNode = nextNode;
    }
    result.push(startNode.deleteChild(dirs[dirs.length - 1]));
  });
  return result.join('\n');
}