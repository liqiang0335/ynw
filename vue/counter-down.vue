<template>
  <button class="counter-down" :class={counting} @click="getCode">{{text}}</button>
</template>
<script>
export default {
  data() {
    return {
      counting: false,
      time: 60
    };
  },
  computed: {
    text() {
      return this.counting ? `${this.time}后重新获取` : "获取验证码";
    }
  },
  methods: {
    getCode() {
      if (this.counting) return;
      this.$emit("getCode");
    },
    run() {
      this.counting = true;
      var interval = setInterval(() => {
        if (this.time == 0) {
          clearInterval(interval);
          interval = null;
          this.counting = false;
          return;
        }
        this.time--;
      }, 1000);
    }
  }
};
</script>
<style scoped>
.counting {
  background: gray;
}
</style>