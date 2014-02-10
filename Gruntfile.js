module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			prod: 'prod',
		},
		connect: {
			dev: {
				options: {
					base: ['prod'],
					port: 8000,
					hostname: '*'
				}
			}
		},
		copy: {
			app: {
				src: 'src/pages/index.html',
				dest: 'prod/index.html'
			}
		},
		jshint: {
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
		},
		watch: {
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
		},
	});

	grunt.registerTask('default', ['dev']);
	grunt.registerTask('dev', ['jshint', 'clean:prod', 'copy:app', 'connect:dev', 'watch']);


	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
}