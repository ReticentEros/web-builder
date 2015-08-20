# Web Builder

- Contain a generic web template
- Include NW for app encapsulation
- Use Grunt and Bower to help manage project (build by Yeoman)
- Use grunt-contrib-sass and grunt-autoprefixer for prefix free style
- Use Karma and Jasmine for unit testing
- Use Protractor for end-to-end testing

## How to use it

Copy following into your project folder

- `.editorconfig`
- `.gitignore`
- `.jshintrc`
- `app`
- `resources`
- `bower.json`
- `Gruntfile.js`
- `karma.conf.js`
- `package.json`
- `protractor.conf.js`

## How to build it.

Install [Node](http://nodejs.org/).

### Update NPM to the latest version

> npm install -g npm

### Install following once

> npm install -g yo

> npm install -g bower

> npm install -g grunt-cli

> npm install -g generator-node-webkit

Do `npm install` and `bower install` for predefined dependent packages.

> npm install

> bower install

Suggestion of file structure

- `app/views` for html files and page dependent scripts
- `app/scripts` for scripts
- `app/styles` for scss/sass & css files
- `app/images` for image files
- `index.html` for app launch entrance

- `tests/e2e` for end-to-end test sources
- `tests/unit` for unit test sources

Modify Gruntfile.js for your development.

Modify `name` in `package.json` for your app name.

Modify app/package.json for your Node-Webkit app.

Modify karma.conf.js to add js file path for unit test.

Modify protractor.conf.js for e2e test settings.

Enjoy yourself.

### Do following if packages were not installed

Use `npm install --save-dev <package>` to install dev packages.

Use `bower install --save <package>` to install front-end packages, ex: jquery.

### General Grunt tasks

Configure app version.

> grunt conf-version:<version>

Run development server (view in browser using http://localhost:8000/).

> grunt serve

Set version to all needed files.

> grunt setVersion

Check JS source with JSLint

> grunt check

Create linux 64-bit distribution.

> grunt dist-linux

Create linux 32-bit distribution.

> grunt dist-linux32

Create ARMhf distribution.

> grunt dist-armhf

Create Windows distribution.

> grunt dist-win

Create Mac 64-bit distribution.

> grunt dist-mac

Create Mac 32-bit distribution.

> grunt dist-mac32

Create Mac dmg from previously created app folder in dist.

> grunt dmg

### Testing this app

Test run this app

> grunt run

Unit test with PhantomJS (auto run test upon file changes).

> grunt unit

Unit test with Chrome (auto run test upon file changes).

> grunt unit:chrome

Unit test with NW.JS (auto run test upon file changes).

> grunt unit:nw

Unit test with PhantomJS (run once).

> grunt unit:ci

Unit test with Chrome (run once).

> grunt unit:chrome:ci

Unit test with NW.JS (run once).

> grunt unit:nw:ci

### E2E test this app

End-to-end (integration) test with NW.JS

> grunt e2e

## NW version

This project uses NW v0.11.6 for most platforms (Linux 64/32, Mac 64/32 and Windows 32) and NW v0.7.1 for Linux ARMhf.  
Please see following for more information

- [http://dl.nwjs.io/](http://dl.nwjs.io/)
- [https://github.com/toxygen/armhf-node-webkit](https://github.com/toxygen/armhf-node-webkit)
- [https://github.com/nwjs/nw.js/issues/1151](https://github.com/nwjs/nw.js/issues/1151)

## NPM Package description

### Grunt Related

grunt : The core task runner used in this project.

load-grunt-tasks :  Auto load grunt tasks (just make it easy for config).

time-grunt :  Calculate the time used in grunt tasks.

grunt-contrib-jshint : Validate JavaScript files with JSHint. (Check before build)

grunt-contrib-clean : Clean files and folders. (for building binary executables)

grunt-contrib-compress : Compress files and folders. (for building binary executables)

grunt-contrib-concat : Concatenate files. (for building binary executables)

grunt-contrib-copy : Copy files and folders (for building binary executables)

grunt-contrib-rename :  Renams files (for building binary executables)

grunt-contrib-connect : Start a connect web server (for the "serve" task)

grunt-contrib-sass : Compile Sass (.scss) to CSS (.css).

grunt-autoprefixer : Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.

grunt-contrib-watch ： Watch file patterns for added, changed or deleted. (Sass auto compile and Serve reload)

grunt-protractor-runner :  Let grunt to run Protractor end-to-end tests.

grunt-karma : Let grunt to run Karma unit tests.

### Test Related

karma :  Karma test runner.

karma-jasmine : Let Karma run Jasmine tests.

karma-chrome-launcher :  Let Karma launch Chrome browser for testing.

karma-nodewebkit-launcher : Let Karma launch NW.JS for testing.

karma-phantomjs-launcher :  Let Karma use PhantomJS for headless testing.

karma-redirect-preprocessor : Modify some file serve URI to fit testing needs.

jasmine-core :  Jasmine unit test framwork core.

phantomjs : A full backend command-line browser for headless testing.

### Packages

nw :  NW.JS the core runtime and packager of this project

concat-files : Concate files.

## Bower Package description

jasmine-jquery :  Add jQuery related conditions for Jasmine test case.

jasmine-ajax : Add mock ajax function for Jasmine test case.
