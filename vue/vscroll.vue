<template>
  <div id="vscroll-root-element" :style="{height:height+'px', opacity}">
    <div class="child" id="vscroll-e1">
      <slot></slot>
    </div>
    <div class="child" id="vscroll-e2">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import createEventHub from "ynw/createEventHub";
const byId = name => document.getElementById(name);
const hub = createEventHub();
const IS_BOTTOM = "IS_BOTTOM";
/**
 * ----------------------------------------
 * @param {Element} el - 运动元素
 * @param {Element} root - 元素容器
 * @param {Boolean} start - 开始运行
 * ----------------------------------------
 */
const move = ({ el, speed = 3, root, start = false, elHeight, rootHeight }) => {
  const bottom = rootHeight - elHeight;
  const maxTop = 0 - elHeight;
  const setpos = v => {
    el.style.transform = `translateY(${v}px)`;
    curpos = v;
  };
  let curpos = rootHeight;
  let run = start;
  let hover = false;
  setpos(rootHeight);

  root.addEventListener("mouseenter", () => (hover = true));
  root.addEventListener("mouseleave", () => (hover = false));

  hub.on(IS_BOTTOM, notify => {
    if (notify !== el) {
      run = true;
    }
  });

  animate();
  function animate() {
    requestAnimationFrame(() => {
      if (run && hover === false) {
        // IS_OUT
        if (curpos <= maxTop) {
          run = false;
          setpos(rootHeight);
          return animate();
        }
        // IS_BOTTOM
        if (curpos <= bottom) {
          hub.emit(IS_BOTTOM, el);
        }
        setpos(curpos - speed);
      }

      animate();
    });
  }
};
/**
 * ----------------------------------------
 * 垂直方向跑马灯
 * @param {Number} start - 开始滚动(依赖DOM元素的高度::数据渲染完成后再开始)
 * @param {Number} [speed=0.5] - 速度(px)
 * @param {Number} [height=150] - 样式 - 控制ROOT高度
 * ----------------------------------------
 */
export default {
  props: {
    speed: {
      type: Number,
      default: 0.5
    },
    start: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 150
    }
  },
  data() {
    return {
      opacity: 0
    };
  },
  watch: {
    start(v) {
      if (!v) return;
      setTimeout(() => {
        const root = byId("vscroll-root-element");
        const e1 = byId("vscroll-e1");
        const e2 = byId("vscroll-e2");
        const elHeight = e1.getBoundingClientRect().height;
        const rootHeight = root.getBoundingClientRect().height;
        const speed = this.speed;

        // 小于容器的高度不滚动
        if (elHeight < rootHeight) {
          this.opacity = 1;
          return;
        }
        move({ el: e1, root, start: true, speed, elHeight, rootHeight });
        move({ el: e2, root, speed, elHeight, rootHeight });
        this.opacity = 1;
      }, 200);
    }
  }
};
</script>
<style scoped lang='scss'>
#vscroll-root-element {
  overflow: hidden;
  position: relative;
}
.child {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>