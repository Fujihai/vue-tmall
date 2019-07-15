# vue-tmall

一个基于 Vue.js 开发的仿天猫 SPA。

## 简介

本项目是个人使用 Vue.js 框架开发的一个 Web App。

项目当前包括 3 个页面，首页、分类页及搜索页。

首页商品数据与搜索页搜索结果分别来源于聚淘宝商品接口 API 和天猫搜索接口 API，均使用 jsonp 方式获取接口数据。

分类页及首页其他组件数据通过本地 mock 进行获取。

## 涉及技术

* [vue-awesome-swiper](<https://github.com/surmon-china/vue-awesome-swiper>)
* [vue-lazyload](<https://github.com/hilongjw/vue-lazyload>) 
* [vue-router](<https://github.com/vuejs/vue-router>)
* [axios](<https://github.com/axios/axios>)
* [mockjs](<https://github.com/nuysoft/Mock>)
* [Sass](<https://www.sass.hk/>)
* [jsonp](<https://github.com/webmodules/jsonp>)

## 预览

|            首页             |              分类页               |             搜索页              |
| :-------------------------: | :-------------------------------: | :-----------------------------: |
| ![首页](/gif/home-page.gif) | ![分类页](/gif/category-page.gif) | ![搜索页](/gif/search-page.gif) |

## 安装及使用

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 协议

MIT