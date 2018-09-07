module.exports = help;

function help() {
  return `
    cd             \t Changes the context to the directory specified
    help           \t Lists all the commands
    ls             \t Lists all the files in the current dir
    mkdir          \t Creates new dir(s) <Doesn't support ./ and ../ creation>
    pwd            \t Lists the path from root to the node
    quit           \t Exits the application
    session clear  \t Clears the current state of the application
    rm             \t Removes a given folder(s) if they exist <Doesn't support removing the current folder>
  `
}