module.exports = function(grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});

	grunt.registerTask('default', ['dev']);
	grunt.registerTask('dev', ['jshint', 'clean:prod', 'copy:app', 'connect:dev', 'watch']);
	grunt.registerTask('server', 'Start static server & REST', function() {
		//console.log('foo');
		require('./server/server');
		//console.log(this);
		grunt.task.run('connect:', this.args.join(':'))
	});

	// Iterates over directory and uses modules
	grunt.loadTasks('build');

}