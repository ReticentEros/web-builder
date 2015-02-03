# Web Builder

- Contain a generic web template
- Include NW for app encapsulation
- Use Grunt and Bower to help manage project (build by Yeoman)
- Use grunt-contrib-sass and grunt-autoprefixer for prefix free style

## How to use it

Copy following into your project folder

- `.editorconfig`
- `.gitignore`
- `.jshintrc`
- `app`
- `resources`
- `bower.json`
- `Gruntfile.js`
- `package.json`

Do `npm install` and `bower install` if dependencies are not existed.

Use `bower install --save <package>` to install front-end packages, ex: jquery.

Use `grunt conf-name:<name>` to configure app name.

Use `grunt conf-version:<version>` to configure app version.

Use `grunt serve` to open development server.

Suggestion of file structure

- `app/views` for html files and page dependent scripts
- `app/scripts` for scripts
- `app/styles` for scss/sass & css files
- `app/images` for image files
- `index.html` for app launch entrance

Enjoy yourself.

## NW version

This project uses NW v0.11.6 for most platforms (Linux 64/32, Mac 64/32 and Windows 32) and NW v0.7.1 for Linux ARMhf.  
Please see following for more information

- [http://dl.nwjs.io/](http://dl.nwjs.io/)
- [https://github.com/toxygen/armhf-node-webkit](https://github.com/toxygen/armhf-node-webkit)
- [https://github.com/nwjs/nw.js/issues/1151](https://github.com/nwjs/nw.js/issues/1151)
