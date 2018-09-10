Sinon Sandbox Demo
==================

使用`sandbox`可以让每个测试保持独立（甚至并行执行），不会因为在这个测试中使用`stub`而影响另一个测试。

如果是简单情况（每次只执行一个），好像直接使用`sinon.restore()`。

```
npm install
npm test
```
