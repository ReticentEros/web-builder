var baseFile = __dirname + '/app/index.html',
    nwBinary,
    chromeDriverBinary;

var exec = require('child_process').exec;
var cmd = 'npm root';


var is64BitOS = process.arch === 'x64' || process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432');


switch (process.platform) {
  case 'darwin':
    // Global
    nwBinary = process.env.PWD + '/node_modules/nw/nwjs/nwjs.app/Contents/MacOS/nwjs';
    chromeDriverBinary = process.env.PWD + is64BitOS ?
      'resources/chromedriver/chromedriver-osx-x64' :
      'resources/chromedriver/chromedriver-osx-ia32';
    break;
  case 'linux':
    nwBinary = process.env.PWD + '/node_modules/nw/bin/nw';
    chromeDriverBinary = process.env.PWD + is64BitOS ?
      'resources/chromedriver/chromedriver-linux-x64' :
      'resources/chromedriver/chromedriver-linux-ia32';
    break;
  case 'win32':
    nwBinary = nwBinary = process.env.PWD + '/node_modules/nw/nwjs/nw.exe';
    chromeDriverBinary = process.env.PWD + is64BitOS ?
      'resources/chromedriver/chromedriver-win-x64.exe' :
      'resources/chromedriver/chromedriver-win-ia32.exe';
    break;
}

exports.config = {
  directConnect: true,
  chromeDriver: chromeDriverBinary, // TODO: update per OS
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      // Path to NW.js binary goes here!
      binary: nwBinary
    }
  },
  // Spec patterns are relative to the location of this config.
  onPrepare: function () {
    browser.ignoreSynchronization = true;
    browser.resetUrl = 'file://' + baseFile;
    browser.driver.get('file://' + baseFile);
  },
  onComplete: function () {
  },
  baseUrl: __dirname + '/app/index.html',
  specs: [
    './tests/e2e/*.js'
  ]
};
