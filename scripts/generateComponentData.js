var fs = require("fs");
var path = require("path");
var chalk = require("chalk"); //color the command line output
var parse = require("react-docgen").parse; //look at component and pull the metadata out of our comp. code
var chokidar = require("chokidar"); //watch files in a cross-friendly way

var paths = {
  examples: path.join(__dirname, "../src", "docs", "examples"),
  components: path.join(__dirname, "../src", "components"),
  output: path.join(__dirname, "../config", "componentData.js"), //metadata file
};
const enableWatchMode = process.argv.slice(2) === "--watch";
if (enableWatchMode) {
  //Regenerate component metadata when components or example change.
  chokidar
    .watch([paths.examples, paths.components])
    .on("change", function (event, path) {
      generate(paths);
    });
} else {
  //Generate component metadata
  generate(paths);
}

function generate(paths) {
  var errors = [];
  var componentData = getDirectories(paths.components).map(function (
    componentName
  ) {
    try {
      return getComponentData(paths, componentName);
    } catch (error) {
      errors.push(
        "An error occured while attempting to generate metadata for " +
          componentName +
          ". " +
          console.error
      );
    }
  });
  writeFile(
    paths.output,
    "module.exports = " + JSON.stringify(errors.length ? errors : componentData)
  );
}

function getComponentData(paths, componentName) {
  var content = readFile(
    path.join(paths.components, componentName, componentName + ".js")
  );
  var info = parse(content);

  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName),
  };
}

function getExampleData(examplePaths, componentName) {
  var examples = getExampleFiles(examplePaths, componentName);
  return examples.map(function (file) {
    var filePath = path.join(examplePaths, componentName, file);
    var content = readFile(filePath);
    var info = parse(content);
    return {
      name: file.slice(0, -3),
      description: info.description,
      code: content,
    };
  });
}

function getExampleFiles(examplesPath, componentName) {
  var exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch (error) {
    console.log(chalk.red(`No examples found for ${componentName}`));
  }
  return exampleFiles;
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function (file) {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(function (file) {
    return fs.statSync(path.join(filepath, file)).isFile();
  });
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function (err) {
    err
      ? console.log(chalk.red(err))
      : console.log(chalk.green("Component data saved."));
  });
}

function readFile(filepath) {
  return fs.readFileSync(filepath, "utf-8");
}
