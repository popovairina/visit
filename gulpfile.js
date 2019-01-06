var gulp         = require('gulp');
var syntax       = 'sass';
var browsersync  = require('browser-sync');
var sass         = require('gulp-sass');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var csso         = require('gulp-csso');
var concat       = require('gulp-concat');
var notify        = require("gulp-notify");

gulp.task('browser-sync', function() {
	browsersync({
		// server: {
		// 	baseDir: 'app'
		// },
		proxy: "site.loc",
		notify: false,
		// open: false,
		// tunnel: true,
		// tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(plumber())
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(csso())
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js', function() {
	return gulp.src([
		
		'app/js/jquery.maskedinput.min.js', // Always at the end
		'app/js/jquery.min.js', // Always at the end
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('watch', ['styles', 'js', 'browser-sync'], function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['styles']);
	gulp.watch(['app/js/common.js'], ['js']);
	gulp.watch('app/**/*.php', browsersync.reload)
});


gulp.task('default', ['watch']);

