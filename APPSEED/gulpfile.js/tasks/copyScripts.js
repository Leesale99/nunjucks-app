var config = require('../config');
var gulp = require('gulp');

var paths = {
	src: config.root.src,
	dest: config.root.dest
}

var copyScriptsFunction = function(){
	gulp.src(paths.src + '/js/vendor/**/*')
	.pipe(gulp.dest(paths.dest +'/js/vendor'));
	//console.log('this is the copy vendor scripts function expression');
}

gulp.task('copyScripts', copyScriptsFunction);

module.exports = copyScriptsFunction