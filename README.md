# Web Builder

- Contain a generic web template

- Include Node-Webkit for app encapsulation

- Use Grunt and Bower to help manage project (build by Yeoman)

- Use grunt-contrib-sass and grunt-autoprefixer for prefix free style

## How to use it

Modify app/package.json for Node-Webkit encapsulation.

Use `grunt watch` for style auto-build and auto-reload.

Put image files into app/images.

Put scss files into app/styles.

Put global js files into app/scripts.

Put html files and page dependent scripts into app/views.

Modify index.html & index.js.

Enjoy yourself.

## How to build it.

Install [node](http://nodejs.org/).

### Install following once

> npm install -g yo

> npm install -g bower

> npm install -g grunt-cli

> npm install -g generator-node-webkit

### Install following per project

> yo node-webkit

> npm install --save-dev grunt-contrib-watch

> npm install --save-dev grunt-contrib-sass

> npm install --save-dev grunt-autoprefixer

Modify Gruntfile.js and app/package.json

### Do following if packages were not installed

> bower install

> npm install
