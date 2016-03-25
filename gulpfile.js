'use strict';

var gulp = require("gulp"),
	jade = require("gulp-jade"),
	sass = require("gulp-sass"),
	plumber = require("gulp-plumber"),
	beeper = require("beeper"),
	liveServer = require("gulp-live-server"),
	config = require("./configuration/mongoDbOptions"),
	server =liveServer.new('Hero-server.js'),
	ts = require('gulp-typescript'),
	logger = require("./configuration/winston"),
	tsProject = ts.createProject('./configuration/tsconfig.json', {typescript: require('typescript')}),
	exec = require('child_process').exec;

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      logger.info(stdout);
      logger.info(stderr);
      cb(err);
    });
  }
}

function onError(error){
	beeper(2)
	logger.error(error)
}

gulp.task('start-mongo', runCommand('mongod --dbpath ' + config.dbLocation))

gulp.task('stop-mongo', function(){
	logger.info("Stoping MongoDB")
	runCommand('mongo --eval "use admin; db.shutdownServer();"')
	
});

gulp.task('stop server', function(){
	logger.info("server stopped")
})

gulp.task("compile-jade", function(){
	logger.info("Jade file change detected. Transpiling....")
	var locals = {};
	gulp.src('./development/templates/*.jade')
		.pipe(plumber({ errorHandler: onError}))
    	.pipe(jade({
      		locals: locals
    		}))
    	.pipe(gulp.dest('./frontend/'))
})

gulp.task("compile-sass", function(){
	logger.info("Sass file change detected. Transpiling....")
	gulp.src("./development/styles/*.scss")
		.pipe(plumber({ errorHandler: onError}))
		.pipe(sass())
		.pipe(gulp.dest('./frontend/styles/'))
})

gulp.task("serve", function(){
	logger.info("Starting Express server.")
	server.start()
})

gulp.task('transpile-typescript', function() {
	logger.info("Transpiling Typescript.")
	gulp.src("./development/app/**/*.*.ts")
//		.pipe(plumber({ errorHandler: onError}))
    	.pipe(ts(tsProject))
		.pipe(gulp.dest('./frontend/app/'));
});

gulp.task("watch", function(){
	logger.info("Watching for file changes.")
	gulp.watch('./development/templates/*.jade', ["compile-jade"])
	gulp.watch('./development/app/components/*.*.*', ["transpile-typescript"])
	gulp.watch('./development/app/services/*.*.*', ["transpile-typescript"])
	gulp.watch('./development/app/datatypes/*.*.*', ["transpile-typescript"])
	gulp.watch('./development/app/*.*.*', ["transpile-typescript"])
	gulp.watch('./development/styles/*.scss', ["compile-sass"])
	gulp.watch('./*.js', ['restart-server'])
	gulp.watch('./config/*.js', ['restart-server'])
	gulp.watch('./api/**/*.js', ['restart-server'])
})

gulp.task('restart-server', function(){
	logger.info("Change detected. Restarting Server.")
	server.start.apply(server);
})




gulp.task("default",["start-mongo","compile-jade","transpile-typescript","compile-sass","serve", "watch"])