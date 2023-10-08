/**
 * ----------------------------------------
 * 事件总线
 * @description on/off/emit/clear
 * ----------------------------------------
 */
const createEventHub = function () {
  return {
    hub: Object.create(null),
    emit(event, data) {
      (this.hub[event] || []).forEach((handler) => handler(data));
    },
    on(event, handler) {
      if (!this.hub[event]) this.hub[event] = [];
      this.hub[event].push(handler);
    },
    off(event, handler) {
      if (!this.hub[event]) return; // 不存在事件
      // 不存在处理函数, 则删除事件
      if (!handler) {
        delete this.hub[event];
        return;
      }
      const i = (this.hub[event] || []).findIndex((h) => h === handler);
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
  };
};

export default createEventHub;
