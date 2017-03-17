module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            './dist/app.tests.js'
        ],
        reporters: ['progress']
    });
};