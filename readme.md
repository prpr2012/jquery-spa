## Webpack +jQuery 单页面Demo 

预览链接:[点击访问](http://test.haohome.top/webpack-spa/)

PS: 原本仅仅是写一个学习webpack配置的小demo，后来在学习其他功能的时候都需要用到js的模块功能，每次写案例都是单独开一个demo，过一段时间再去找又很麻烦,所以干脆在这个项目上去实现，正好可以记录我学习的过程。能力有限,大家发现问题希望及时指出,谢谢!

> 目前呈现的模块:
>
> 1. 前端路由(hash和history模式)
> 2. 数据状态管理(模拟vuex)
> 3. JS设计模式案例(添加中)
> 4. CSS布局经典案例(添加中)

Demo结构:

```shell
├── config
│   ├── config.js
│   ├── utils.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.prod.js
│   └── webpack.test.js
├── src
│   ├── assets
│   │   ├── css
│   │   └── img
│   ├── common
│   │   ├── lib
│   │   └── utils.js
│   ├── index.html
│   ├── main.js
│   ├── route
│   │   └── router.js
│   └── views
│       ├── design
│       ├── error
│       ├── index
│       ├── layout
│       ├── mvvm
│       └── state
├── favicon.ico
├── package-lock.json
├── package.json
├── postcss.config.js
├── readme.md
├── static
│   ├── favicon.ico
│   └── lib
│       └── jquery-3.2.1.js
└── tree.md
```

### 2019-01-30

1. 优化状态管理的逻辑,修复bug
2. 添加观察者模式的案例---监听登录
3. 其他demo(导出Excel/h5直播)的添加

### 2018-11-28 更新日志

1. 修复兄弟路由加载逻辑,将状态管理作为一个lib,修复状态管理重复添加事件问题;
2. 添加布局的案例,调整页面结构

### 2018-11-18 更新日志

1. 完成hash和history两种路由模式

### 2018-11-13 更新日志

1. 添加状态管理demo,~~目前有一个**bug**: 路由切换会不断向事件中push新的监听事件,后续再优化解决~~
2. 添加404页面处理,侧边导航栏的高亮
3. 添加了解虚拟DOM的Demo

### 2018-11-12 更新日志

1. 采用ES6 class类
2. 添加代理模式、订阅模式菜单

### 2018-11-9 更新日志

1. 更新webpack编译配置,开发环境不导出独立css文件,开发环境css修改静默更新,减少开发环境资源消耗,添加友好控制台代码日志显示;
2. 添加单页面**路由控制器**,配置好路径即可实例化访问组件,实现多级单页面控制;
3. 优化组件内事件绑定逻辑,让绑定事件更简单;

### 2018-7-6 更新日志

1. webpack版本为3.11.0;
2. 实现了js、html、css的自动化打包，同时识别并编译html中url，css中url（主要为img图片）；
3. 引入jQuery并生成全局变量，个人认为这是最佳的引入方式；
4. 利用babel将代码中的ES6语法转为ES5；
5. 利用postcss-loder 自动追加css浏览器前缀；
6. 配置了部分代码js和css的压缩;
7. 可根据环境配置变量,如接口api;

能力有限,如有BUG可在[Issues区](https://github.com/yifoo/webpack-demo/issues)留言
