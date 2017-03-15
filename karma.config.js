module.exports = function(config) {
  config.set({
  	browsers: ['PhantomJS'],
	basePath: './',
	frameworks: ['jasmine'],
	files: [
		'tests/*.js'
	]
  });
};