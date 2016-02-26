var gulp = require("gulp"),
	jade = require("gulp-jade"),
	sass = require("gulp-sass"),
	plumber = require("gulp-plumber"),
	beeper = require("beeper"),
	liveServer = require("gulp-live-server");



function onError(error){
	beeper(2)
	console.log(error)
}

gulp.task("compile-jade", function(){
	console.log("Jade file change detected. Transpiling....")
	var locals = {};
	gulp.src('./development/templates/*.jade')
		.pipe(plumber({ errorHandler: onError}))
    	.pipe(jade({
      		locals: locals
    		}))
    	.pipe(gulp.dest('./staticpages/'))
})

gulp.task("compile-sass", function(){
	console.log("Sass file change detected. Transpiling....")
	gulp.src("./development/styles/*.scss")
		.pipe(plumber({ errorHandler: onError}))
		.pipe(sass())
		.pipe(gulp.dest('./staticpages/dependencies/'))
})

gulp.task("serve", function(){
	console.log("Starting Express server.")
	var server =liveServer.new('server.js');
	server.start()
	gulp.watch('./*',function(){
		console.log("Change detected. Restarting Server")
		server.start.apply(server);
	})
})
gulp.task("watch", function(){
	console.log("Watching for file changes.")
	gulp.watch('./development/templates/*.jade', ["compile-jade"])
	gulp.watch('./development/styles/*.scss', ["compile-sass"])
})


gulp.task("default",["compile-sass","compile-jade","serve", "watch"])