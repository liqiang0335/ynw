/**
 * gulp sprite : 制作雪碧图
 *
 */
////////////////////////////////////
const folder = "======"; //设置目录
////////////////////////////////////
const gulp = require("gulp");
const path = require("path");
const spritesmith = require("gulp.spritesmith");
gulp.task("sprite", function() {
  const cssTemplate = images => images.sprites.map(transfer).join("");
  const spriteData = gulp.src(folder + "/src/*.*").pipe(
    spritesmith({
      imgName: "sprite.png",
      cssName: "sprite.css",
      padding: 10,
      cssTemplate
    })
  );
  return spriteData.pipe(gulp.dest(folder + "/dist"));
});

function transfer(item) {
  const name = item.name;
  const bg = item.escaped_image;
  const x = item.px.offset_x;
  const y = item.px.offset_y;
  const w = item.px.width;
  const h = item.px.height;
  return `.sp-${name}{
              background-image: url(${bg});
              background-position: ${x} ${y};
              width: ${w};
              height: ${h};
            }`;
}
