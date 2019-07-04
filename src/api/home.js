import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

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
