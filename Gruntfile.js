module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {},
		concat: {},
		copy: {},
		jshint: {},
		watch: {},
	});

	gurnt.registerTask('default', []);


	grunt.loadNpmTasks('grunt-contirb-clean');
	grunt.loadNpmTasks('grunt-contirb-concat');
	grunt.loadNpmTasks('grunt-contirb-copy');
	grunt.loadNpmTasks('grunt-contirb-jshint');
	grunt.loadNpmTasks('grunt-contirb-watch');
}