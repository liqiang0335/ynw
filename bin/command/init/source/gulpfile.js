const gulp = require("gulp");
const spritesmith = require("gulp.spritesmith");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

/**
 * 自动刷新浏览器
 */
gulp.task("serve", function() {
  browserSync.init({
    server: "./demo" //设置服务器根目录
  });
  //设置监控文件类型
  gulp.watch("./demo/*").on("change", reload);
});

//////////////////////////////////////////////////////////////////////

/**
 * 制作雪碧图
 */
const source = "folderName/src/*.*"; //设置目录
const dist = "folderName/dist"; //设置保存目录
gulp.task("sprite", function() {
  const cssTemplate = images => images.sprites.map(transfer).join("");
  const spriteData = gulp.src(source).pipe(
    spritesmith({
      imgName: "sprite.png",
      cssName: "sprite.css",
      padding: 10,
      cssTemplate
    })
  );
  return spriteData.pipe(gulp.dest(dist));
});

function transfer(item) {
  const name = item.name;
  const bg = item.escaped_image;
  const x = item.px.offset_x;
  const y = item.px.offset_y;
  const w = item.px.width;
  const h = item.px.height;
  return `.sp-${name}{background-image: url(${bg});
  background-position: ${x} ${y}; width: ${w};height: ${h};}`;
}
