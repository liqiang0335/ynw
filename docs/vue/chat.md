# chat

> 聊天对话框

## Usage

数据格式

```js
 /* {
    dir: "left",  // (左侧还是右侧)
    avatar: "/yngpProduct/manage/common/images/avatar.jpg", //头像地址
    style: {
      background: "red", //气泡的背景色
      color: "white" //文字的颜色
    }
  }
*/
<yn-chat v-for="item in chats" :data="item" :key="item.id">
  <div slot="top">{{item.name}}</div>
  <div slot="content">{{item.content}}</div>
  <div slot="bottom">{{item.time}}</div>
  <div slot="action" @click="onReply(item)">回复</div>
</yn-chat>
```
