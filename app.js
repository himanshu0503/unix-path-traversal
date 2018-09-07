const Node = require('./classes/node.js');
const Utils = require('./utils/utilsExporter.js');
const prompt = require('prompt');
prompt.start();

let newNode = new Node('root', null);
let rootNode = newNode;
let context = {
  startNode: newNode
};

function main() {
  prompt.get(['input'], function(err, result) {
    var args = result.input.trim().split(' ');
    let cmd = args[0];
    let values = args.splice(1, args.length);
    if (cmd === 'quit') {
      console.log('EXITING APPLICATION');
    } else if (typeof Utils[cmd] === 'function') {
      let cmdResult = Utils[cmd](rootNode, context, values);
      console.log(cmdResult);
      main();
    } else {
      console.log('ERR: CANNOT RECOGNIZE INPUT.');
      console.log('Please type help to get the list of supported commands')
      main();
    }
  });
}

main();