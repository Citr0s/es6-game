module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            './dist/tests/*.js'
        ],
        reporters: ['coverage'],
        preprocessors: {
            './**/*.js': 'coverage'
        },
        coverageReporter: {
            type: 'lcovonly',
            dir: 'coverage',
            subdir: '.'
        }
    });
};