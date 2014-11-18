# Web Builder

- Contain a generic web template
- Include Node-Webkit for app encapsulation
- Use Grunt and Bower to help manage project (build by Yeoman)
- Use grunt-contrib-sass and grunt-autoprefixer for prefix free style

## How to use it

Copy following into your project folder

- `app`
- `resources`
- `.editorconfig`
- `.gitignore`
- `.jshintrc`
- `bower.json`
- `Gruntfile.js`
- `package.json`

Do `npm install` and `bower install` if dependent packages are not installed.

Use `bower install --save <package>` to install front-end packages, ex: jquery.

Modify `name` in `package.json` for your app name.

Modify `app/package.json` for your Node-Webkit app.

Use `grunt watch` for style auto-build and auto-reload.

- `app/views` for html files and page dependent scripts
- `app/scripts` for scripts
- `app/styles` for scss/sass & css files
- `app/images` for image files
- `index.html` for app launch entrance

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

Modify Gruntfile.js for your development.

Modify app/package.json for your Node-Webkit app.

### Do following if packages were not installed

Use `npm install --save-dev <package>` to install dev packages.

> bower install

> npm install
