'use strict';
const sass = require('node-sass');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '@khatastroffik/grunt-*']
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      'cssSrcDir': 'src/sass',
      'cssTargetDir': 'assets/css',
      'jsSrcDir': 'src/js',
      'jsTargetDir': 'assets/js',
      'jsDependencies': [
        '<%= config.jsSrcDir %>/libs/jquery-3.4.1.min.js',
        '<%= config.jsSrcDir %>/libs/jquery.fitvids.js',
        '<%= config.jsSrcDir %>/libs/jquery.history.js',
        '<%= config.jsSrcDir %>/libs/highlight.pack.js',
        '<%= config.jsSrcDir %>/libs/nprogress.js',
        '<%= config.jsSrcDir %>/libs/tocbot.min.js',
        'node_modules/ghosthunter/dist/jquery.ghosthunter.js'
      ]
    },
    copy: {
      dev: {
        files: [{
          dest: 'assets/font/',
          src: '*',
          cwd: 'src/font/',
          expand: true
        }]
      },
      dist: {
        files: [{
          dest: 'assets/font/',
          src: '*',
          cwd: 'src/font/',
          expand: true
        }]
      }
    },
    clean: {
      dev: ['dev'],
      dist: ['dist'],
      all: ['dev', 'dist']
    },
    sass: {
      options:{
        implementation: sass,
      },
      dev: {
        options: {
          includePaths: ['<%= config.cssSrcDir %>'],
          sourceMaps: true
        },
        files: {
          '<%= config.cssTargetDir %>/style.css': '<%= config.cssSrcDir %>/style.scss'
        }
      },
      dist: {
        options: {
          implementation: sass,
          outputStyle: 'compressed'
        },
        files: {
          '<%= config.cssTargetDir %>/style.css': '<%= config.cssSrcDir %>/style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: false
      },
      dev: {
        src: '<%=  config.cssTargetDir %>/*.css'
      },
      dist: {
        src: '<%=  config.cssTargetDir %>/*.css'
      }
    },
    uglify: {
      js: {
        files: {
          '<%= config.jsTargetDir %>/script.js': [
            '<%= config.jsDependencies %>',
            '<%= config.jsSrcDir %>/script.js'
          ]
        }
      }
    },
    watch: {
      css: {
        files: '<%=  config.cssSrcDir %>/**/*.scss',
        tasks: ['sass:dev', 'copy:dev', 'postcss:dev']
      },
      js: {
        files: '<%=  config.jsSrcDir %>/**/*.js',
        tasks: ['uglify']
      }
    },
    compress: {
      main: {
        options: {
          archive: `dist/${require('./package.json').name}.zip`,
          level: 9
        },
        files: [{
          src: [
            '*.hbs',
            'package.json',
            'LICENSE',
            'README',
            'partials/**',
            'locales/**',
            'assets/**',
            '!node_modules',
            '!node_modules/**'
          ],
          dest: '.'
        }]
      },
    },
    standardVersion: {
      options: {        
        infile: 'CHANGELOG.md',
        header: '# Ghostination changelog\n\n' +
        'All notable changes to this project will be documented in this file. See [Ghostination](https://github.com/khatastroffik/ghostination).\n\n',
        noVerify: true,
        dryRun: false,
      },
      firstRelease: {
        options: {
          firstRelease: true
        }
      },
      release: {
        options: {
        }
      },
      test: {
        options: {
          dryRun: true
        }
      }
    },
    git_push: {
      options: {
        flags: {
          "dry-run": false,
          "no-verify": true
        },
        verbose: true,
        debug: false,
        continueIfError: false
      },
      default: {
        options: {
          remote: 'ghostination',
          branch: 'master',
          flags: {
            "follow-tags": true,
          }
        }
      },
      test: {
        options: {
          verbose: true,
          debug: true,
          remote: 'ghostination',
          branch: 'master',
          continueIfError: true,
          flags: {
            "dry-run": true,
            ipv4: true,
            "follow-tags": true,
            "no-verify": true
          }
        }
      }
    },
    conventionalGithubReleaser: {
      release:{
        options: {
          auth: {
            type: 'oauth',
            token: process.env.GH_KHATASTROFFIK_GHOSTINATION
          },
          changelogOpts: {
            preset: 'angular'
          }
        }
      }

    },        
  });

  grunt.registerTask('test', ['standardVersion:test','git_push:test']); // call the git_push task with target 'test'

  grunt.registerTask('build', [
    'sass:dist',
    'postcss:dist',
    'copy:dist',
    'uglify'
  ]);
  grunt.registerTask('default', [
    'sass:dev',
    'postcss:dev',
    'copy:dev',
    'uglify',
    'watch'
  ]);

  grunt.registerTask('release', [
    'build',
    'compress',    
    'standardVersion:release',
    'git_push:default',
    // 'conventionalGithubReleaser'
  ]);
  grunt.registerTask('firstRelease', [
    'build',
    'compress',    
    'standardVersion:firstRelease',
    'git_push:default',
    // 'conventionalGithubReleaser'
  ]);

};