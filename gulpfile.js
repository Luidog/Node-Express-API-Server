var gulp = require("gulp"),
	jade = require("gulp-jade"),
	sass = require("gulp-sass"),
	plumber = require("gulp-plumber"),
	beeper = require("beeper");



function onError(error){
	beeper()
	console.log(error)
}

gulp.task("compile-jade", function(){
	var locals = {};
	gulp.src('./development/templates/*.jade')
		.pipe(plumber({ errorHandler: onError}))
    	.pipe(jade({
      		locals: locals
    		}))
    	.pipe(gulp.dest('./staticpages/'))
})

gulp.task("compile-sass", function(){
	gulp.src("./development/styles/*.scss")
		.pipe(plumber({ errorHandler: onError}))
		.pipe(sass())
		.pipe(gulp.dest('./staticpages/dependencies/'))
})
gulp.task("watch", function(){
	gulp.watch('./development/templates/*.jade', ["compile-jade"])
	gulp.watch('./development/templates/*.scss', ["compile-sass"])
})


gulp.task("default",["compile-sass","compile-jade", "watch"])