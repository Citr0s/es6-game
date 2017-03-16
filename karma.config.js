module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            './dist/tests/app.tests.js'
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            '*.js': 'coverage'
        },
        coverageReporter: {
            type: 'lcovonly',
            dir: 'coverage',
            subdir: '.'
        }
    });
};