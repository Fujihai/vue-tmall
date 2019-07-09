import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

export const getCategoryContent = (id) => {
  return axios.get(`/category/content/${id}`, {
    timeout: TIMEOUT
  }).then(res => {
    if(res.data.code === SUCC_CODE) {
      return res.data.contents[0].items;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if(err) {
      console.log(err);
    }

    // 返回出错的图片数据或者是提示性文字
  });
};
