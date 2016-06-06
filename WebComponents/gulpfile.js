/// <binding AfterBuild='libs' Clean='clean' />

var gulp = require("gulp");
var karma = require("gulp-karma");
var gulpUtil = require("gulp-util");
var webpack = require("gulp-webpack");
var rename = require("gulp-rename");
var rimraf = require("rimraf");
var clean = require('gulp-clean');
var child_process = require("child_process");

var paths = {
    npm: './node_modules/',
    lib: './lib/'
};

var libs = [
    paths.npm + 'angular/angular.js',
    paths.npm + 'angular-route/angular-route.js',
    paths.npm + 'angular-sanitize/angular-sanitize.js',
    paths.npm + 'jquery/dist/jquery.js',
    paths.npm + 'rx/dist/rx.all.compat.js'
];

gulp.task("typedoc", function () {
    child_process.exec("typedoc --out ./docs/ ./wwwroot/ --module commonjs --jsx react --experimentalDecorators --ignoreCompilerErrors --exclude node_module");
});

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('remove-compiled-js', function () {
    return gulp.src(["./src/**/*.js", "./src/**/*.js.map"], { read: false })
    .pipe(clean());
});

gulp.task('clean', function (callback) {
    rimraf(paths.lib, callback);
});

gulp.task("webpack", ['remove-compiled-js'], function () {
    return gulp.src('src/main.ts')
    .pipe(webpack({
        resolve: {
            extensions: ["", ".js", ".ts"]
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/, loader: "ts", exclude: [/node_modules/]
                },
                {
                    test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
                },
                {
                    test: /\.html$/, loader: "raw"
                }
            ]
        }
    }))
    .pipe(rename("components.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('run-unit-tests', function () {
    return gulp.src([
        'libs/jquery/dist/jquery.js',
        'libs/rx/dist/rx.all.compat.js',
        'libs/angular/angular.js',
        'libs/angular-route/angular-route.js',
        'libs/angular-sanitize/angular-sanitize.js',
        //'./dist/components.js',
        './dist/components.spec.js'
    ])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            console.log(err);
            this.emit('end');
        });
});

gulp.task('watch', function () {
    gulp.watch([
        './src/**/*.ts', './src/**/*.html', './src/**/*.css'
    ], ['remove-compiled-js', 'webpack']);
});

gulp.task('default', ['remove-compiled-js','libs', 'webpack', 'watch']);