var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

var base = "./example/vue/";

gulp.task("serve", function() {
  browserSync.init({
    server: { baseDir: base }
  });
  // 监控
  gulp.watch(base + "**/*.html").on("change", reload);
  gulp.watch(base + "**/*.css").on("change", reload);
  gulp.watch(base + "**/*.bundle.js").on("change", reload);
});

gulp.task("default", ["serve"]);
