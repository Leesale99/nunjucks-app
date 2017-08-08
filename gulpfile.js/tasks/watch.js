var config = require('../config')
var gulp = require('gulp')
var path = require('path')
var watch = require('gulp-watch')

var watchTask = function() {
    var watchableTasks = ['images', 'html', 'css', 'components']

    watchableTasks.forEach(function(taskName) {
        var task = config.tasks[taskName]
        if (task) {
            var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
            if (taskName == 'components') {
                watch(glob, function() {
                    require('./html')()
                    require('./css')()
                    require('./images')()
                })
            } else {
                watch(glob, function() {
                    require('./' + taskName)()
                })
            }
        }
    })
}

gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask