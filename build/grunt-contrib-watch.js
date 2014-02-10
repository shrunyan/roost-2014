module.exports = function(grunt) {


	grunt.config('watch', {
		livereload: {
			options: {
				livereload: true
			},
			files: ['src/**/*.{js,css}', 'prod/*'],
			tasks: [],
		},
		page: {
			files: ['src/**/*.html'],
			tasks: ['livereload']
		},
		jshintrc: {
			files: ['**/.jshintrc'],
			tasks: ['jshint']
		},
		script: {
			files: ['<%= jshint.app.src %>'],
			tasks: ['jshint:app']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
}