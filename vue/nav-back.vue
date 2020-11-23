<template>
  <van-nav-bar
    placeholder
    border
    fixed
    :z-index="100"
    v-bind="$attrs"
    v-on="$listeners"
    left-arrow
    left-text="返回"
    @click-left="$router.back()"
  >
    <slot></slot>
  </van-nav-bar>
</template>
<style scoped lang='scss'>
</style>