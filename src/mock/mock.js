const Mock = require('mockjs');

Mock.mock('/home/slider', 'get', require('./json/slider.json'));
