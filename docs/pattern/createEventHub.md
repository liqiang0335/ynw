# createEventHub

> 事件总线

```js
import createEventHub from "ynw/pattern/createEventHub";
```

## Source

```js
const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
  },
  clear(keys) {
    if (keys) {
      for (let key of [].concat(keys)) {
        this.hub[key] = [];
      }
    } else {
      this.hub = Object.create(null);
    }
  },
});

export default createEventHub;
```