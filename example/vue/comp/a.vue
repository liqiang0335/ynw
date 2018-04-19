<template>
  <div>
    <h1>A-{{msg}}</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.setState);
  }
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>