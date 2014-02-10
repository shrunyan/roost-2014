module.exports = function(grunt) {


	grunt.config('jshint', {
		build: {
			options: {
				jshintrc: '.jshintrc'
			},
			src: ['Gruntfile.js']
		},
		app: {
			options: {
				jshintrc: 'src/.jshintrc'
			},
			src: ['src/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
}