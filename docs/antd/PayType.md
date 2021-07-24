# PayType

> 选择支付方式 (支付宝+微信)

## Usage

```js
import PayType from "ynw/antd/PayType/index";

function Modal() {
  return (
    <Form>
      <Item label="选择支付方式" name="payType">
        <PayType />
      </Item>
    </Form>
  );
}
```

## Props

- value: String - alipay 或 wxpay
- onChange
