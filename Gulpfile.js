/*
 * 		Dependencies
 * 		------------
 */

var gulp          	= require('gulp'),
	sass 			= require('gulp-sass'),
	sourcemaps 		= require('gulp-sourcemaps'),
	uglify      	= require('gulp-uglify'),
	concat 			= require('gulp-concat'),
	imagemin 		= require('gulp-imagemin'),
	plumber 		= require('gulp-plumber');

/*
 * 		Settings
 * 		--------
 */

var settings = {

	/* SASS */

	main_css_src    : './resources/sass/app.scss',
	css_src         : './resources/sass/**/*.scss',
	css_dest        : './app',

	/* Images */

	img_src         : './resources/images/*',
	img_dest        : './app/images'
};

/*
 * 		CSS
 * 		---
 */

gulp.task('css', function () {

	return gulp.src( settings.main_css_src )

		.pipe(plumber())

		.pipe(sourcemaps.init())

		.pipe(sourcemaps.write())

		.pipe(sass())

		.pipe(gulp.dest( settings.css_dest ));
});

/*
 * 		Images
 * 		------
 */

gulp.task('images', function() {

	return gulp.src( settings.img_src )

		.pipe(plumber())

		.pipe(imagemin({

			progressive: true,
			svgoPlugins: [{removeViewBox: true}]
		}))

		.pipe(gulp.dest( settings.img_dest ));
});

/*
 * 		Global Tasks
 * 		------------
 */


gulp.task('default', function() {

	gulp.watch( settings.css_src, 		['css'] );
	gulp.watch( settings.img_src, 		['images'] );
});

gulp.task('deploy', [

	'css',
	'images'
]);