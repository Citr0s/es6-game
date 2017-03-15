var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
 
gulp.task('build', function () {
    return browserify({entries: 'app.babel.js', debug: true})
        .transform("babelify", { presets: ["env"] })
        .bundle()
        .pipe(source('app.babel.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch(['./*.js', './src/*.js'], ['build']);
});

gulp.task('default', ['watch']);
gulp.task('build-release', ['build']);