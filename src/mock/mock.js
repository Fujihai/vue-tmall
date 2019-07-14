const Mock = require('mockjs');

Mock.mock('/home/slider', 'get', require('./json/slider.json'))
  .mock('/home/nav', 'get', require('./json/nav.json'))
  .mock('/category/content/1', 'get', require('./json/tab/tab-1.json'))
  .mock('/category/content/2', 'get', require('./json/tab/tab-2.json'))
  .mock('/category/content/3', 'get', require('./json/tab/tab-no-data.json'))
  .mock('/category/content/4', 'get', require('./json/tab/tab-no-data.json'))
  .mock('/category/content/5', 'get', require('./json/tab/tab-no-data.json'))
  .mock('/category/content/6', 'get', require('./json/tab/tab-no-data.json'))
  .mock('/category/content/7', 'get', require('./json/tab/tab-no-data.json'))
  .mock('/category/content/8', 'get', require('./json/tab/tab-no-data.json'))
  .mock('/category/content/9', 'get', require('./json/tab/tab-no-data.json'))
  .mock('/category/content/10', 'get', require('./json/tab/tab-no-data.json'));

