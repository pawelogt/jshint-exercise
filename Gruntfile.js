module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    jshint: {
      options: {
     //   reporter: 'checkstyle',
	//reporterOutput: 'target/checkstyle.xml',
        jshintrc: '.jshintrc'
      }, all: {
        src: ['src/**/*.js']
      }
    },
      karma: {
          unit: {
              configFile: 'spec/karma.conf.js', singleRun: true
          }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

};
