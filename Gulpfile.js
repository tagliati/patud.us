var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
	 gulp.src('assets/sass/**/*.scss')
	.pipe(sass({includePaths: require('node-bourbon').includePaths,includePaths: require('node-neat').includePaths}).on('error', sass.logError)
        )
	.pipe(gulp.dest('./public/css/'));
});
