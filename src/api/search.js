import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {jsonpOptions, TIMEOUT} from './config';

// https://suggest.taobao.com/sug?area=b2c&code=utf-8&k=1&src=tmall_h5&
// q=关键字&callback=jsonp_67246595

export const getSearchResult = keyword => {
  const url = 'https://suggest.taobao.com/sug';
  const params = {
    area: 'b2c',
    code: 'utf-8',
    k: 1,
    src: 'tmall_h5',
    q: keyword,
  };

  return jsonp(url, params, jsonpOptions).then(res => {
    if(res) {
      return res;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if(err) {
      console.log(err);
    }
  });
};
