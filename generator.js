const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/build.js`);

(() => {
  buildSetup();
  startCreating();
})();
