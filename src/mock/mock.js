const Mock = require('mockjs');

Mock.mock('/home/slider', 'get', require('./json/slider.json'))
  .mock('/home/nav', 'get', require('./json/nav.json'))
  .mock('/category/content/1', 'get', require('./json/tab-1.json'))
  .mock('/category/content/2', 'get', require('./json/tab-2.json'));

