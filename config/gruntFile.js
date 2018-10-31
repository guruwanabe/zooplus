module.exports = function (grunt) {
  //Init the config
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        development: {
          options: {
            paths: ['../assets/css']
          },
          files: {
            '../assets/css/theme.css': '../assets/less/' + ['*.less']
          }
        }
      }
  });
  //Load packages
  grunt.loadNpmTasks('grunt-contrib-less');
  //Register packages
  grunt.registerTask('default', ['less']);
};
