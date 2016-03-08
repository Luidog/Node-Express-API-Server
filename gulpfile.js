var gulp = require("gulp"),
	jade = require("gulp-jade"),
	sass = require("gulp-sass"),
	plumber = require("gulp-plumber"),
	beeper = require("beeper"),
	liveServer = require("gulp-live-server"),
	config = require("./configuration/mongoDbOptions"),
	server =liveServer.new('server.js'),
	ts = require('gulp-typescript'),
	logger = require("./configuration/winston"),
	tsProject = ts.createProject('tsconfig.json', {typescript: require('typescript')}),
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

gulp.task('start-mongo', function(){
	logger.info("Starting MongoDB")
	runCommand('mongod --dbpath ' + config.dbLocation);
})

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
    	.pipe(gulp.dest('./staticpages/'))
})

gulp.task("compile-sass", function(){
	logger.info("Sass file change detected. Transpiling....")
	gulp.src("./development/styles/*.scss")
		.pipe(plumber({ errorHandler: onError}))
		.pipe(sass())
		.pipe(gulp.dest('./staticpages/dependencies/'))
})

gulp.task("serve", function(){
	logger.info("Starting Express server.")
	server.start()
})

gulp.task('transpile-typescript', function(done) {
	logger.info("Watching for typescript file changes.")
  var tsResult = gulp.src([
      "node_modules/angular2/bundles/typings/angular2/angular2.d.ts",
      "node_modules/angular2/bundles/typings/angular2/http.d.ts",
      "node_modules/angular2/bundles/typings/angular2/router.d.ts",
      "node_modules/angular2/typings/browser.d.ts",
      "node_modules/@reactivex/rxjs/dist/es6/Rx.d.ts",
      "development/angular2/*.ts"
    ])
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('staticpages/dependencies'));
});

gulp.task("watch", function(){
	logger.info("Watching for file changes.")
	gulp.watch('./development/templates/*.jade', ["compile-jade"])
	gulp.watch('./development/styles/*.scss', ["compile-sass"])
	gulp.watch('./*.js', ['restart-server'])
	gulp.watch('./development/angular2/*.ts', ['transpile-typescript'])
	gulp.watch('./config/*.js', ['restart-server'])
	gulp.watch('./api/**/*.js', ['restart-server'])
})

gulp.task('restart-server', function(){
	logger.info("Change detected. Restarting Server.")
	server.start.apply(server);
})




gulp.task("default",["start-mongo","compile-jade","transpile-typescript","compile-sass","serve", "watch"])