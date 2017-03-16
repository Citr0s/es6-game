module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            './dist/src/**/*.js',
            './dist/tests/**/*.js'
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            './dist/*.js': 'coverage'
        },
        coverageReporter: {
            type: 'lcovonly',
            dir: 'coverage',
            subdir: '.'
        }
    });
};