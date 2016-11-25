module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            libs: {
                files: {
                    'jquery.liveurl.min.js': ['jquery.liveurl.js']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};
