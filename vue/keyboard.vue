<template>
  <div class="keyboard" @click="submit" ref="keyboard">
    <div class="line line1">
      <span class="char">
        <i>1</i>
      </span>
      <span class="char">
        <i>2</i>
      </span>
      <span class="char">
        <i>3</i>
      </span>
      <span class="char">
        <i>4</i>
      </span>
      <span class="char">
        <i>5</i>
      </span>
      <span class="char">
        <i>6</i>
      </span>
      <span class="char">
        <i>7</i>
      </span>
      <span class="char">
        <i>8</i>
      </span>
      <span class="char">
        <i>9</i>
      </span>
      <span class="char">
        <i>0</i>
      </span>
    </div>
    <div class="line line2">
      <span class="char">
        <i>q</i>
      </span>
      <span class="char">
        <i>w</i>
      </span>
      <span class="char">
        <i>e</i>
      </span>
      <span class="char">
        <i>r</i>
      </span>
      <span class="char">
        <i>t</i>
      </span>
      <span class="char">
        <i>y</i>
      </span>
      <span class="char">
        <i>u</i>
      </span>
      <span class="char">
        <i>i</i>
      </span>
      <span class="char">
        <i>o</i>
      </span>
      <span class="char">
        <i>p</i>
      </span>
    </div>
    <div class="line line3">
      <span class="char">
        <i>a</i>
      </span>
      <span class="char">
        <i>s</i>
      </span>
      <span class="char">
        <i>d</i>
      </span>
      <span class="char">
        <i>f</i>
      </span>
      <span class="char">
        <i>g</i>
      </span>
      <span class="char">
        <i>h</i>
      </span>
      <span class="char">
        <i>j</i>
      </span>
      <span class="char">
        <i>k</i>
      </span>
      <span class="char">
        <i>l</i>
      </span>
    </div>
    <div class="line line4">
      <span class="char icon">
        <i @click.stop="toggle" :class="{lock:lock}">⇧</i>
      </span>
      <span class="char">
        <i>z</i>
      </span>
      <span class="char">
        <i>x</i>
      </span>
      <span class="char">
        <i>c</i>
      </span>
      <span class="char">
        <i>v</i>
      </span>
      <span class="char">
        <i>b</i>
      </span>
      <span class="char">
        <i>n</i>
      </span>
      <span class="char">
        <i>m</i>
      </span>
      <span class="char icon">
        <i @click.stop="$emit('remove')">←</i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lock: false //大写锁定
    };
  },
  watch: {
    lock(val) {
      const items = this.$refs.keyboard.querySelectorAll("i");
      [...items].forEach(item => {
        const value = item.textContent;
        item.textContent = val ? value.toUpperCase() : value.toLowerCase();
      });
    }
  },
  methods: {
    toggle() {
      this.lock = !this.lock;
    },
    submit(e) {
      const el = e.target;
      const isTag = el.nodeName.toUpperCase() == "I";
      if (isTag) {
        const value = el.textContent;
        const target = this.lock ? value.toUpperCase() : value;
        this.$emit("submit", target);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: rgb(0, 140, 255);
$c: rgb(224, 230, 235);
.keyboard {
  padding: 10px;
  background: gray;
  margin: 0;
  font-size: 17px;
  background: white;
  .line {
    text-align: center;
    display: flex;
    justify-content: space-around;
    .char {
      background: white;
      display: flex;
      padding: 2px;
      &.icon {
        i {
          background: $c;
        }
      }
      i {
        font-style: normal;
        display: block;
        flex-grow: 1;
        margin: 2px;
        padding: 5px;
        border: 1px solid rgb(199, 199, 199);
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        overflow: hidden;
        &:active {
          background: rgb(230, 229, 229);
        }
        &.lock {
          background: $blue;
          border-color: darken($color: $blue, $amount: 10%);
          color: white;
        }
      }
    }
  }
  .line1,
  .line2 {
    .char {
      width: 10%;
    }
  }
  .line3,
  .line4 {
    .char {
      width: 11.111111%;
    }
  }
}
</style>
