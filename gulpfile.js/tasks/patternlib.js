var config = require('../config')
if (!config.tasks.html) return

var browserSync = require('browser-sync')
  //var data         = require('gulp-data')
var gulp = require('gulp')
var gulpif = require('gulp-if')
var handleErrors = require('../lib/handleErrors')
var htmlmin = require('gulp-htmlmin')
var path = require('path')
var render = require('gulp-nunjucks-render')
var fs = require('fs')

var paths = {
  src: path.join(config.root.src, config.tasks.html.src),
  src_components: path.join(config.root.src, config.tasks.html.src),
  dest: path.join(config.root.dest, config.tasks.html.dest)
}

var patternlib = function() {
  var fullHTML = '';
  var componentsList = fs.readdirSync(paths.src_components, 'utf8')
  for (var i = 0; i < componentsList.length; i++) {
    var fp = paths.src_components + '/' + componentsList[i];
    if (!componentsList[i].endsWith(".html")) {
      switch (componentsList[i].substring(0, 1)) {
        case '_':
          // ignore _files
          break;
        case '.':
          // ignore .files
          break;
        default:
          for (var x = 0; x < fs.readdirSync(fp, 'utf8').length; x++) {
            if (fs.readdirSync(fp, 'utf8')[x].endsWith('.html')) {
              fullHTML = fullHTML + '<h2 class="pattern-header">' + fs.readdirSync(fp, 'utf8')[x] + '</h2><div class="component-container" data-include="' + fs.readdirSync(fp, 'utf8')[x] + '">{% include "' + componentsList[i] + '/' + fs.readdirSync(fp, 'utf8')[x] + '" %}</div><pre><code id="' + fs.readdirSync(fp, 'utf8')[x] + '"></code></pre>';
            }
          }
          break;
      }
    }
  }
  fs.readFile(paths.src + '/_layouts/pattern-template.html', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/{{{patternLib}}}/g, fullHTML);

    fs.writeFile(paths.src + '/pattern-library.html', result, 'utf8', function(err) {
      if (err) return console.log(err);
    });
  });
  return gulp.src(paths.src);
}

gulp.task('patternlib', patternlib)
module.exports = patternlib