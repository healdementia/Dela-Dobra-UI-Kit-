"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("."))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "."
  });

  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
