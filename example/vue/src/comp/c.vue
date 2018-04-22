<template>
  <div>
    <h1>Comp-C</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello"
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("Comp-C");
  }
};
</script>
<style scoped>
h1 {
  color: green;
}
</style>
