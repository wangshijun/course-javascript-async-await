# 玩转异步 JS ：async/await 简明教程

## 课程介绍

在软件开发领域，简洁的代码 => 容易阅读的代码 => 容易维护的代码，而 ES2017 中的 async/await 特性能让我们编写出相比回调地狱和 Promise 链式调用更直观、更容易理解的代码，await 关键字接收一个 Promise，等待代码执行，直到 Promise 状态变为 resolved 或者 rejected，这种特性能让我们的异步代码阅读起来更像是同步代码。

本课程将会从编写简单的 async/await 函数开始，用实例带领大家探索 async/await 实战的方方面面，比如如何结合 Promise 和 await 关键字？如何定义不同类型的 async 函数？如何安全的使用 async/await，即处理错误？如何让多个 await 串行或并行？如何在循环中正确使用 await？

## 适用人群

* [required] 具备 JS 基础知识，知道如何运行 Node.js 脚本；
* [required] 知道 Callback、Promise 等异步处理概念；
* [optional] 期望学习新的异步特性，编写更简洁易懂易维护的代码；
* [optional] 期望不断打磨自己的 JS 技能，让自己变得更值钱；

## 内容目录

### 1. 编写第一个 async/await 函数

手把手教你把发起 HTTP 请求并解析响应的代码改写成 async/await 风格，让你学会 async/await 的基本语法。

### 2. 将 async 函数用在 Promise 链中

带你探索如何在 Promise 链中像使用其他 Promise 一样无缝使用 async 函数。

### 3. 把任意类型的函数转成 async 风格

实例演示如何将任意函数写成 async 风格，包括函数声明、函数表达式、箭头函数、类方法、对象方法等。

### 4. 处理 async 函数中的错误

不同于 Promise 中的 .catch() 错误处理机制，在 async 函数中，我们需要使用 try/catch 结构来恰当的处理错误。

### 5. 正确处理多个 await 操作的并行串行

学会通过移动 await 关键词的位置实现多个 await 操作串行或者并行，并且用数据证明让多个异步操作并行的性能优势。

### 6. 使用 Promise.all() 让多个 await 操作并行

学会使用 ES2015 中的解构和 Promise.all() 实现多个异步操作的并行，非常适合需要同时发起多个请求的情形，代码可读性不打折扣。

### 7. 结合 await 和任意兼容 .then() 的代码

await 操作符并不仅仅局限于 ES2015 的 Promise，可以和任意兼容 .then() 方法的代码使用，通过实例学会如何与流行的 Promise 库结合使用。

### 8. 在 for 循环中正确的使用 await

理解 for 循环中 await 不同写法带来的性能影响，以及改进的方法。

## 源码链接

代码仓库：[wangshijun/course-javascript-async-await](https://github.com/wangshijun/course-javascript-async-await)

运行方法（请确保系统中安装了 [Node.js](https://nodejs.org/en/)）：

```shell
git clone https://github.com/wangshijun/course-javascript-async-await.git
cd course-javascript-async-await
node xxx.js
```

上面的 xxx.js 对应每节课程的源码，列表如下：

1. [编写第一个 async/await 函数](https://github.com/wangshijun/course-javascript-async-await/blob/master/01-first-async-await-function.js)
1. [将 async 函数用在 Promise chain 中](https://github.com/wangshijun/course-javascript-async-await/blob/master/02-use-async-function-as-promise.js)
1. [把任意类型的函数转成 async 风格](https://github.com/wangshijun/course-javascript-async-await/blob/master/03-convert-any-function-into-async.js)
1. [处理 async 函数中的错误](https://github.com/wangshijun/course-javascript-async-await/blob/master/04-handling-errors-for-async.js)
1. [正确处理多个 await 操作的并行串行](https://github.com/wangshijun/course-javascript-async-await/blob/master/05-await-multiple-promise-seq-or-concurrently.js)
1. [使用 Promise.all() 让多个 await 操作并行](https://github.com/wangshijun/course-javascript-async-await/blob/master/06-await-multiple-promise-with-all.js)
1. [结合 await 和任意兼容 .then() 的代码](https://github.com/wangshijun/course-javascript-async-await/blob/master/07-use-await-with-any-thenable.js)
1. [在 for 循环中正确的使用 await](https://github.com/wangshijun/course-javascript-async-await/blob/master/08-await-in-loops.js)

## 运行环境

* Node.js v8.6.0
* VSCode v1.17.1 + Vim

## 参考资料

* [Google Web Fundamentals](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions)

## 视频下载

关注《前端周刊》微信公众号，回复 course-async-await 即可获取高清视频教程下载地址。

![README.png](./README.png)

## 题外话

最后，可能你有同学会问，我为什么要做这个公开课？接下来的计划是什么？请阅读[好久不见，我总感觉欠你点什么](https://mp.weixin.qq.com/s/sH3jpHb7ry2_fF3OVrQ72Q)
