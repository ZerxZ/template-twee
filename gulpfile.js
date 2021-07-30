var gulp = require("gulp");
var webserver = require("gulp-webserver");

gulp.task("webserver", function () {
  gulp.src(".").pipe(
    webserver({
      fallback: "./dist/index.html",
      path: "./dist",
      livereload: true,
      directoryListing: true,
      //   open: true,
    })
  );
});
