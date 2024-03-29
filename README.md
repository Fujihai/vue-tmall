# vue-tmall

这是一个基于 Vue 开发的商城 Web App，页面样式参考天猫手机版网站。

## 技术栈

vue 2 + vue-awesome-swiper + vue-lazyload + vue-router + axios + Sass + mockjs + jsonp

## 预览

### PC端

[请戳此处](<http://49.232.35.54/#/home>)

> **PS：建议使用 Chrome 浏览器开启手机调试模式访问，体验更佳！**

### 手机移动端

![vue-tmall-qr.png](/gif/vue-tmall-qr.png)

### 项目截图

|            首页             | 分类页 |             搜索页              |
| :-------------------------: | :----: | :-----------------------------: |
| ![首页](/gif/home-page.gif) |   ![首页](/gif/category-page.gif)   | ![搜索页](/gif/search-page.gif) |

## 项目运行

``` bash
# 克隆项目到本地
https://github.com/liufushihai/vue-tmall.git

# 切换到项目所在文件夹
cd vue-tmall

# 安装依赖
npm install

# 本地服务器运行，浏览器访问 http://localhost:8080 即可预览
npm run dev

# 构建生产
npm run build
```

## 目录结构

```javascript
vue-mall
├─ .babelrc
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ .postcssrc.js
├─ README.md
├─ build					//webpack 构建命令目录，包括运行开发环境，项目打包等配置文件
│    ├─ build.js
│    ├─ check-versions.js
│    ├─ utils.js
│    ├─ vue-loader.conf.js
│    ├─ webpack.base.conf.js
│    ├─ webpack.dev.conf.js
│    └─ webpack.prod.conf.js
├─ config					//webpack 与 node 的基础配置，开发、线上环境的配置
│    ├─ dev.env.js
│    ├─ index.js
│    └─ prod.env.js
├─ dist
│    ├─ index.html
│    └─ static
│           ├─ css
│           ├─ img
│           └─ js
├─ gif						//项目预览效果图
│    ├─ category-page.gif
│    ├─ home-page.gif
│    ├─ search-page.gif
│    └─ vue-tmall-qr.png
├─ index.html
├─ package.json
├─ src						//项目根目录
│    ├─ App.vue
│    ├─ api					//接口封装
│    │    ├─ category.js
│    │    ├─ config.js
│    │    ├─ home.js
│    │    └─ search.js
│    ├─ assets				//项目公共资源目录
│    │    ├─ fonts			//Iconfont 字体图标
│    │    ├─ img			//图片
│    │    ├─ js				//jsonp 等相关 js 文件
│    │    └─ scss			//CSS 预处理文件目录
│    ├─ base				//项目基础组件目录
│    │    ├─ backtop		//返回顶部组件
│    │    ├─ confirm		//确认框组件
│    │    ├─ navbar			//导航栏组件
│    │    ├─ scroll			//滚动条组件
│    │    ├─ search-box		//搜索框组件
│    │    └─ slider			//幻灯片组件
│    ├─ config				//rem 配置文件目录
│    │    └─ rem.js
│    ├─ main.js
│    ├─ mock				//mock 相关
│    │    ├─ json			//本地数据
│    │    └─ mock.js
│    ├─ pages
│    │    ├─ category		//分类页
│    │    ├─ home			//首页
│    │    └─ search			//搜索页
│    └─ router				//vue-router 配置
│           └─ index.js
└─ static
       └─ .gitkeep
```



## License

MIT