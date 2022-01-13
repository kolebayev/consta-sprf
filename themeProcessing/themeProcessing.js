const fs = require("fs");
const postcss = require("postcss");
const colorFunction = require("postcss-color-function");
const simpleVars = require("postcss-simple-vars");
// const discardComments = require("postcss-discard-comments");

const calculate = (targetFilePath, resultFilePath) => {
  const css = fs.readFileSync(targetFilePath, "utf8");
  const output = postcss([simpleVars, colorFunction]).process(css).css;
  fs.writeFileSync(resultFilePath, output);
};

const fileProcessing = (item) => {
  const { target, result, files, modifier } = item;
  files.forEach((file) => {
    const targetFilePath = `${target}_${modifier}/_Theme_${modifier}_${file}.css`;
    const resultFilePath = `${result}_${modifier}/Theme_${modifier}_${file}.css`;
    // check if result file exists
    fs.access(resultFilePath, fs.constants.F_OK, (err) => {
      if (err) {
        // calculate
        calculate(targetFilePath, resultFilePath);
        console.log(`✅ [RESULT] ${resultFilePath} created`);
      } else {
        // watch target for changes and calculate
        console.log(`👀 Node is watching target files to change`);
        fs.watchFile(targetFilePath, (curr, prev) => {
          curr !== prev && calculate(targetFilePath, resultFilePath);
          console.log(`✅ [RESULT] ${resultFilePath} updated`);
        });
      }
    });
  });
};

[
  {
    target: "./themeProcessing/",
    result: "./src/Components/Theme/",
    files: ["FigmaDefault", "FigmaDark"],
    modifier: "color",
  },
  {
    target: "./themeProcessing/",
    result: "./src/Components/Theme/",
    files: ["FigmaDefault"],
    modifier: "shadow",
  },
].forEach((item) => fileProcessing(item));
