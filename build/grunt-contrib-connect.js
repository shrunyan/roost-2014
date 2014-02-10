module.exports = function(grunt) {


	grunt.config('connect', {
		dev: {
			options: {
				base: ['prod'],
				port: 8000,
				hostname: '*'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
}