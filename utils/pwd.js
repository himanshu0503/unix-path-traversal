module.exports = ls;

function ls(rootNode, context) {
  let startNode = context.startNode;
  let result = ['/', startNode.val];
  while(startNode.parent !== null) {
    startNode = startNode.parent;
    result.push('/');
    result.push(startNode.val);
  }
  result.push('/')
  return result.reverse().join('');
}