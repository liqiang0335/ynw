<template>
  <div>
    <div class="item" v-for="item in 5" :key="item">{{item}}</div>
  </div>
</template>
<script>
import ScrollPosition from "@ynw/browser/scrollPosition";
import { fromEvent } from "rxjs";
import { scan, debounceTime, filter } from "rxjs/operators";
const scrollPosition = new ScrollPosition();
/**
 * emmit on window scroll to bottom
 */
export default {
  mounted() {
    fromEvent(window, "scroll")
      .pipe(
        debounceTime(500),
        filter(() => scrollPosition.isToBottom()),
        scan(count => count + 1, 0)
      )
      .subscribe(count => console.log("scroll to bottom " + count));
  }
};
</script>

<style scoped lang="scss">
.item {
  width: 500px;
  height: 500px;
  margin: 10px;
  background: gray;
}
</style>