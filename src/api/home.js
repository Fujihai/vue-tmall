import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {SUCC_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE, jsonpOptions} from './config';

export const getHomeSlider = () => {
  return axios.get('/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    if(res.data.code === SUCC_CODE) {
      return res.data.sliders;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if(err) {
      console.log(err);
    }

    // 返回出错的图片数据或者是提示性文字
  });
};

export const getHomeNav = () => {
  return axios.get('/home/nav', {
    timeout: TIMEOUT
  }).then(res => {
    if(res.data.code === SUCC_CODE){
      return res.data.navs;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if(err){
      console.log(err);
    }
  });
};

// 获商品数据
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json?';

  // 天猫的参数，请求经常失效，无法使用
  // const params = {
  //   jsv: '2.4.0',
  //   appKey: '12574478',
  //   t: '1562379737106',
  //   sign: '1074b6b3d1582dcc2aee1c5d791509f3',
  //   api: 'mtop.tmall.tac.gateway.execute',
  //   v: '1.0',
  //   type: 'jsonp',
  //   dataType: 'jsonp',
  //   timeout: '20000',
  //   callback: 'mtopjsonp2',
  //   data: '%7B"msCodes"%3A"2017080800"%2C"params"%3A"%7B%5C"isH5%5C"%3A%5C"true%5C"%2C%20%5C"h5ttid%5C"%3A%5C"TMALL-H5-1.3.0-SELECT_FRONT_PAGE-0%5C"%2C%5C"pageCode%5C"%3A%5C"SELECT_FRONT_PAGE%5C"%7D"%7D'
  // };

  // 聚淘宝的参数
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };

  return jsonp(url, params, jsonpOptions).then(res => {
    // console.log(res);
    if(res.code === '200'){
      return res;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if(err){
      console.log(err);
    }

    return undefined;
  });
};
