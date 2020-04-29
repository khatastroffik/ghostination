module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*']
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
        dryRun: true,
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
      alpha: {
        options: {
          prerelease: 'alpha'
        }
      },
      beta: {
        options: {
          prerelease: 'beta'
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

  grunt.loadNpmTasks('@khatastroffik/grunt-standard-version');

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
    // 'conventionalGithubReleaser'
  ]);
  grunt.registerTask('firstRelease', [
    'build',
    'compress',    
    'standardVersion:firstRelease',
    // 'conventionalGithubReleaser'
  ]);
  grunt.registerTask('release-alpha', [
    'build',
    'compress',    
    'standardVersion:alpha',
    // 'conventionalGithubReleaser'
  ]);
  grunt.registerTask('release-beta', [
    'build',
    'compress',    
    'standardVersion:beta',
    // 'conventionalGithubReleaser'
  ]);    
};