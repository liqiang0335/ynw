# ErrorBoundary

> 错误捕获

```js
<ErrorBoundary key={window.location.hash}>
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
</ErrorBoundary>
```
