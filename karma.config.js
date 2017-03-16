module.exports = function(config) {
  config.set({
  	browsers: ['PhantomJS'],
	basePath: './',
	frameworks: ['jasmine'],
	files: [
		'./dist/*.js'
	],
    reporters: ['coverage'],
	preprocessors: {
	  './dist/tests/*.js': 'coverage'
	},
    coverageReporter: {
      type : 'lcovonly',
      subdir: '.'
    }
  });
};