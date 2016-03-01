var gulp = require("gulp"),
	jade = require("gulp-jade"),
	sass = require("gulp-sass"),
	plumber = require("gulp-plumber"),
	beeper = require("beeper"),
	liveServer = require("gulp-live-server"),
	config = require("./config/mongoDbOptions"),
	server =liveServer.new('server.js'),
	exec = require('child_process').exec;

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

function onError(error){
	beeper(2)
	console.log(error)
}

gulp.task('start-mongo',runCommand('mongod --dbpath ' + config.dbLocation ));

gulp.task('stop-mongo', function(){
	console.log("Stoping MongoDB")
	runCommand('mongo --eval "use admin; db.shutdownServer();"')
});

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
	server.start()
})
gulp.task("watch", function(){
	console.log("Watching for file changes.")
	gulp.watch('./development/templates/*.jade', ["compile-jade"])
	gulp.watch('./development/styles/*.scss', ["compile-sass"])
	gulp.watch('./*.js', ['restart-server'])
	gulp.watch('./config/*.js', ['restart-server'])
	gulp.watch('./api/**/*.js', ['restart-server'])
})

gulp.task('restart-server', function(){
	console.log("Change detected. Restarting Server.")
	server.start.apply(server);
})

gulp.task("default",["start-mongo","compile-jade","compile-sass","serve", "watch"])