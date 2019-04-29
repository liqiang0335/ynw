<template>
  <div class="mychat" :class="data.dir">
    <div class="mychat-avatar" :class="data.dir" :style="avatarStyle"></div>
    <div class="mychat-content" :class="data.dir">
      <div class="mychat-top">
        <slot name="top"></slot>
      </div>
      <div class="mychat-center">
        <div class="mychat-triangle" :style="triangle"></div>
        <div class="mychat-wrod" :class="data.dir" :style="data.style">
          <slot name="content"></slot>
        </div>
        <div class="mychat-action" :class="data.dir">
          <slot name="action"></slot>
        </div>
      </div>
      <div class="mychat-bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 聊天对话框
 * 
 * 数据格式
 * {
    dir: "left",  // (左侧还是右侧)
    avatar: "/yngpProduct/manage/common/images/avatar.jpg", //头像地址
    style: { 
      background: "red", //气泡的背景色
      color: "white" //文字的颜色
    }
  }

 * 使用方法
 * <yn-chat v-for="item in chats" :data="item" :key="item.id">
      <div slot="top">{{item.name}}</div>
      <div slot="content">{{item.content}}</div>
      <div slot="bottom">{{item.time}}</div>
      <div slot="action" @click="onReply(item)">回复</div>
    </yn-chat>
 */
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          dir: "left",
          avatar: "@common/images/avatar.png"
        };
      }
    }
  },
  computed: {
    avatarStyle() {
      return {
        backgroundImage: `url('${this.data.avatar}')`
      };
    },
    triangle() {
      let bg = "#e6e6e6";
      const { style, dir } = this.data;
      if (style && style.background) {
        bg = style.background;
      }
      const isRight = dir == "right";
      const reverse = isRight ? "left" : "right";
      const angle = isRight ? -10 : 10;
      return {
        border: "8px solid transparent",
        [`border-${reverse}-color`]: bg,
        position: "absolute",
        [dir]: "-13px",
        top: "7px",
        transform: `rotate(${angle}deg)`
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.mychat {
  margin: 25px 0;
  overflow: hidden;
  .left {
    float: left;
  }
  .right {
    float: right;
    &.mychat-content {
      text-align: right;
      .mychat-center {
        text-align: left;
        flex-direction: row-reverse;
      }
    }
  }
  .mychat-avatar {
    width: 40px;
    height: 40px;
    position: relative;
    top: 15px;
    overflow: hidden;
    background: rgb(230, 230, 230);
    border-radius: 50%;
    background-size: 100% auto;
    background-position: center center;
  }
  .mychat-content {
    line-height: 1.7em;
    max-width: 60%;
    margin: 0 15px;
    color: rgb(61, 61, 61);
    .mychat-top {
      color: gray;
    }
    .mychat-center {
      align-items: center;
      margin: 5px 0;
      position: relative;
      min-width: 80px;
      display: flex;
      .mychat-wrod {
        color: rgb(60, 60, 60);
        border-radius: 4px;
        background: rgb(230, 230, 230);
        padding: 15px;
        flex-grow: 1;
      }
      .mychat-action {
        flex-shrink: 0;
        cursor: pointer;
        margin: 0 5px;
      }
    }
    .mychat-bottom {
      color: gray;
    }
  }
}
</style>

