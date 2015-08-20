/*jshint camelcase: false*/

module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var config = {
    app: 'app',
    dist: 'dist',
    distMac32: 'dist/macOS',
    distMac64: 'dist/macOS',
    distLinux32: 'dist/Linux32',
    distLinux64: 'dist/Linux64',
    distWin: 'dist/Win',
    tmp: 'buildTmp',
    resources: 'resources',
    nw: 'node_modules/nw/bin/nw'
  };

  grunt.initConfig({
    config: config,
    connect: {
      watch: {
        options: {
          port: 8000,
          base: config.app
        }
      }
    },
    autoprefixer: {
      watch: {
        expand: true,
        flatten: true,
        src: config.app + '/styles/*.css',
        dest: config.app + '/styles'
      }
    },
    sass: {
      watch: {
        options: {
          trace: true,
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: config.app,
          src: ['**/*.sass', '**/*.scss'],
          dest: config.app,
          ext: '.css'
        }]
      }
    },
    watch: {
      styles: {
        files: [config.app + '/**/*.sass', config.app + '/**/*.scss'],
        tasks: ['sass:watch', 'autoprefixer:watch'],
        options: {
          livereload: true
        }
      },
      htmls: {
        files: [config.app + '/**/*.html'],
        tasks: [],
        options: {
          livereload: true
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distMac32: {
        files: [{
          dot: true,
          src: [
            '<%= config.distMac32 %>/*',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distMac64: {
        files: [{
          dot: true,
          src: [
            '<%= config.distMac64 %>/*',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distLinux64: {
        files: [{
          dot: true,
          src: [
            '<%= config.distLinux64 %>/*',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distLinux32: {
        files: [{
          dot: true,
          src: [
            '<%= config.distLinux32 %>/*',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distWin: {
        files: [{
          dot: true,
          src: [
            '<%= config.distWin %>/*',
            '<%= config.tmp %>/*'
          ]
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: '<%= config.app %>/js/*.js'
    },
    copy: {
      appLinux: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.distLinux64 %>/app.nw',
          src: '**'
        }]
      },
      appLinux32: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.distLinux32 %>/app.nw',
          src: '**'
        }]
      },
      appMacos32: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.distMac32 %>/node-webkit.app/Contents/Resources/app.nw',
          src: '**'
        }, {
          expand: true,
          cwd: '<%= config.resources %>/mac/',
          dest: '<%= config.distMac32 %>/node-webkit.app/Contents/',
          filter: 'isFile',
          src: '*.plist'
        }, {
          expand: true,
          cwd: '<%= config.resources %>/mac/',
          dest: '<%= config.distMac32 %>/node-webkit.app/Contents/Resources/',
          filter: 'isFile',
          src: '*.icns'
        }, {
          expand: true,
          cwd: '<%= config.app %>/../node_modules/',
          dest: '<%= config.distMac32 %>/node-webkit.app/Contents/Resources/app.nw/node_modules/',
          src: '**'
        }]
      },
      appMacos64: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.distMac64 %>/node-webkit.app/Contents/Resources/app.nw',
          src: '**'
        }, {
          expand: true,
          cwd: '<%= config.resources %>/mac/',
          dest: '<%= config.distMac64 %>/node-webkit.app/Contents/',
          filter: 'isFile',
          src: '*.plist'
        }, {
          expand: true,
          cwd: '<%= config.resources %>/mac/',
          dest: '<%= config.distMac64 %>/node-webkit.app/Contents/Resources/',
          filter: 'isFile',
          src: '*.icns'
        }, {
          expand: true,
          cwd: '<%= config.app %>/../node_modules/',
          dest: '<%= config.distMac64 %>/node-webkit.app/Contents/Resources/app.nw/node_modules/',
          src: '**'
        }]
      },
      webkit32: {
        files: [{
          expand: true,
          cwd: '<%=config.resources %>/node-webkit/MacOS32',
          dest: '<%= config.distMac32 %>/',
          src: '**'
        }]
      },
      webkit64: {
        files: [{
          expand: true,
          cwd: '<%=config.resources %>/node-webkit/MacOS64',
          dest: '<%= config.distMac64 %>/',
          src: '**'
        }]
      },
      copyWinToTmp: {
        files: [{
          expand: true,
          cwd: '<%= config.resources %>/node-webkit/Windows/',
          dest: '<%= config.tmp %>/',
          src: '**'
        }]
      }
    },
    compress: {
      appToTmp: {
        options: {
          archive: '<%= config.tmp %>/app.zip'
        },
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          src: ['**']
        }]
      },
      finalWindowsApp: {
        options: {
          archive: '<%= config.distWin %>/webBuilder.zip'
        },
        files: [{
          expand: true,
          cwd: '<%= config.tmp %>',
          src: ['**']
        }]
      }
    },
    rename: {
      macApp32: {
        files: [{
          src: '<%= config.distMac32 %>/node-webkit.app',
          dest: '<%= config.distMac32 %>/webBuilder.app'
        }]
      },
      macApp64: {
        files: [{
          src: '<%= config.distMac64 %>/node-webkit.app',
          dest: '<%= config.distMac64 %>/webBuilder.app'
        }]
      },
      zipToApp: {
        files: [{
          src: '<%= config.tmp %>/app.zip',
          dest: '<%= config.tmp %>/app.nw'
        }]
      }
    },
    karma: {
      nw: {
        configFile: 'karma.conf.js',
        browsers: ['NodeWebkitWithCustomPath']
      },
      chrome: {
        configFile: 'karma.conf.js',
        browsers: ['Chrome']
      },
      headless: {
        configFile: 'karma.conf.js',
        browsers: ['PhantomJS']
      },
      nw_ci: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['NodeWebkitWithCustomPath']
      },
      chrome_ci: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['Chrome']
      },
      headless_ci: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },
    protractor: {
      options: {
        configFile: "./protractor.conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      nw:{

      },
      headless:{
        options:{
            args: {
              directConnect: false,
              capabilities: {
                browserName: 'phantomjs',
                'phantomjs.binary.path': require('phantomjs').path,
                'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG'],
              }
            }
        }
      }
    }

  });

  grunt.registerTask('chmod32', 'Add lost Permissions.', function () {
    var fs = require('fs'),
      path = config.distMac32 + '/webBuilder.app/Contents/';
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper EH.app/Contents/MacOS/nwjs Helper EH', '555');
    }
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper NP.app/Contents/MacOS/nwjs Helper NP', '555');
    }
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper.app/Contents/MacOS/nwjs Helper', '555');
    }
    if (fs.existsSync(path + 'MacOS/node-webkit')) {
      fs.chmodSync(path + 'MacOS/node-webkit', '555');
    } else {
      fs.chmodSync(path + 'MacOS/nwjs', '555');
    }
  });

  grunt.registerTask('chmod64', 'Add lost Permissions.', function () {
    var fs = require('fs'),
      path = config.distMac64 + '/webBuilder.app/Contents/';
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper EH.app/Contents/MacOS/nwjs Helper EH', '555');
    }
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper NP.app/Contents/MacOS/nwjs Helper NP', '555');
    }
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper.app/Contents/MacOS/nwjs Helper', '555');
    }
    if (fs.existsSync(path + 'MacOS/node-webkit')) {
      fs.chmodSync(path + 'MacOS/node-webkit', '555');
    } else {
      fs.chmodSync(path + 'MacOS/nwjs', '555');
    }
  });


  grunt.registerTask('run', 'test run app', function (version) {
    var done = this.async();
    var childProcess = require('child_process');
    var exec = childProcess.exec;
    exec(config.nw + ' app', function (error, stdout, stderr) {
      if (stdout) {
        grunt.log.write(stdout);
      }
      if (stderr) {
        grunt.log.write(stderr);
      }
      if (error !== null) {
        grunt.log.error(error);
      }
      done(result);
    });
  });


  grunt.registerTask('createLinuxApp', 'Create linux distribution.', function (version) {
    var done = this.async();
    var childProcess = require('child_process');
    var exec = childProcess.exec;
    var path = './' + (version === 'Linux64' ? config.distLinux64 : config.distLinux32);
    exec('mkdir -p ' + path + '; cp resources/node-webkit/' + version + '/nw.pak ' + path + ' && cp resources/node-webkit/' + version + '/nw ' + path + '/node-webkit && cp resources/node-webkit/' + version + '/icudtl.dat ' + path + '/icudtl.dat', function (error, stdout, stderr) {
      var result = true;
      if (stdout) {
        grunt.log.write(stdout);
      }
      if (stderr) {
        grunt.log.write(stderr);
      }
      if (error !== null) {
        grunt.log.error(error);
        result = false;
      }
      done(result);
    });
  });

  grunt.registerTask('createWindowsApp', 'Create windows distribution.', function () {
    var done = this.async();
    var concat = require('concat-files');
    concat([
      'buildTmp/nw.exe',
      'buildTmp/app.nw'
    ], 'buildTmp/webBuilder.exe', function () {
      var fs = require('fs');
      fs.unlink('buildTmp/app.nw', function (error, stdout, stderr) {
        if (stdout) {
          grunt.log.write(stdout);
        }
        if (stderr) {
          grunt.log.write(stderr);
        }
        if (error !== null) {
          grunt.log.error(error);
          done(false);
        } else {
          fs.unlink('buildTmp/nw.exe', function (error, stdout, stderr) {
            var result = true;
            if (stdout) {
              grunt.log.write(stdout);
            }
            if (stderr) {
              grunt.log.write(stderr);
            }
            if (error !== null) {
              grunt.log.error(error);
              result = false;
            }
            done(result);
          });
        }
      });
    });
  });

  grunt.registerTask('setVersion', 'Set version to all needed files', function (version) {
    var config = grunt.config.get(['config']);
    var appPath = config.app;
    var resourcesPath = config.resources;
    var mainPackageJSON = grunt.file.readJSON('package.json');
    var appPackageJSON = grunt.file.readJSON(appPath + '/package.json');
    var infoPlistTmp = grunt.file.read(resourcesPath + '/mac/Info.plist.tmp', {
      encoding: 'UTF8'
    });
    var infoPlist = grunt.template.process(infoPlistTmp, {
      data: {
        version: version
      }
    });
    mainPackageJSON.version = version;
    appPackageJSON.version = version;
    grunt.file.write('package.json', JSON.stringify(mainPackageJSON, null, 2), {
      encoding: 'UTF8'
    });
    grunt.file.write(appPath + '/package.json', JSON.stringify(appPackageJSON, null, 2), {
      encoding: 'UTF8'
    });
    grunt.file.write(resourcesPath + '/mac/Info.plist', infoPlist, {
      encoding: 'UTF8'
    });
  });

  grunt.registerTask('serve', [
    'connect:watch',
    'sass:watch',
    'autoprefixer:watch',
    'watch'
  ]);

  grunt.registerTask('createPlistFile', 'set node webkit and app relevant information to a new plist file', function() {
    var metadata = grunt.file.readJSON('.yo-rc.json');
    var resourcesPath = config.resources;
    var nwExecuteable = 'nwjs';
    if (metadata.nodeWebkitVersion.indexOf('v0.8.') === 0 || metadata.nodeWebkitVersion.indexOf('v0.9.') === 0 || metadata.nodeWebkitVersion.indexOf('v0.10.') === 0 || metadata.nodeWebkitVersion.indexOf('v0.11.') === 0) {
      nwExecuteable = 'node-webkit';
    }
    var infoPlistTmp = grunt.file.read(resourcesPath + '/mac/Info.plist.tmp', {
      encoding: 'UTF8'
    });
    var infoPlist = grunt.template.process(infoPlistTmp, {
      data: {
        nwExecutableName: nwExecuteable
      }
    });
    grunt.file.write(resourcesPath + '/mac/Info.plist', infoPlist, {
      encoding: 'UTF8'
    });
  })

  grunt.registerTask('dist-linux', [
    'jshint',
    'clean:distLinux64',
    'copy:appLinux',
    'createLinuxApp:Linux64'
  ]);

  grunt.registerTask('dist-linux32', [
    'jshint',
    'clean:distLinux32',
    'copy:appLinux32',
    'createLinuxApp:Linux32'
  ]);

  grunt.registerTask('dist-win', [
    'jshint',
    'clean:distWin',
    'copy:copyWinToTmp',
    'compress:appToTmp',
    'rename:zipToApp',
    'createWindowsApp',
    'compress:finalWindowsApp'
  ]);

  grunt.registerTask('dist-mac', [
    'jshint',
    'clean:distMac64',
    'createPlistFile',
    'copy:webkit64',
    'copy:appMacos64',
    'rename:macApp64',
    'chmod64'
  ]);

  grunt.registerTask('dist-mac32', [
    'jshint',
    'clean:distMac32',
    'createPlistFile',
    'copy:webkit32',
    'copy:appMacos32',
    'rename:macApp32',
    'chmod32'
  ]);

  grunt.registerTask('check', [
    'jshint'
  ]);

  grunt.registerTask('e2e', [
    'protractor:nw'
  ]);


  // grunt unit
  // grunt unit:headless
  // grunt unit:headless-ci
  grunt.registerTask('unit', 'Run all my unittests.', function(mode, pref) {
    if (mode == null) {
      mode = 'headless';
    }else {
      if(mode == 'ci'){
        pref = mode;
        mode = 'headless';
      }
    }
    if(pref != null){
      pref = '_' + pref;
    }else{
      pref = '';
    }
    grunt.task.run('karma:' + mode + pref);
  });

  grunt.registerTask('dmg', 'Create dmg from previously created app folder in dist.', function () {
    var done = this.async();
    var createDmgCommand = 'resources/mac/package.sh "webBuilder"';
    require('child_process').exec(createDmgCommand, function (error, stdout, stderr) {
      var result = true;
      if (stdout) {
        grunt.log.write(stdout);
      }
      if (stderr) {
        grunt.log.write(stderr);
      }
      if (error !== null) {
        grunt.log.error(error);
        result = false;
      }
      done(result);
    });
  });

};
