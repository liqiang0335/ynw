# BraftEditor

> 富文本编辑器

## Usage

```jsx
import BraftEditor from "ynw/antd/BraftEditor";

const onEditor = () => {
  editData.content = Braft.createEditorState(editData.content);
};

const submit = () => {
  params.content = params.content.toHTML();
};

function Modal(params) {
  return (
    <Form>
      <Item name="content">
        <BraftEditor />
      </Item>
    </Form>
  );
}
```
