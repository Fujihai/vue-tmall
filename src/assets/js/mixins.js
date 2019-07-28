import storage from 'assets/js/storage';
import { SEARCH_PAGE_HISTORIES_KEY } from 'pages/search/config';

export const searchMixin = {
  methods: {
    // _ 与 $ 混用，防止与 vue 中自带的函数或者符号有冲突
    _$selectItem(word) {
      let words = storage.get(SEARCH_PAGE_HISTORIES_KEY, []);

      if(words.length !== 0) {
        //保留与当前记录不同的元素
        words = words.filter(val => val !== word);
      }

      //将当前记录添加到数组开头
      words.unshift(word);

      storage.set(SEARCH_PAGE_HISTORIES_KEY, words);

      //跳转到淘宝搜索
      location.href = `https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&&n=20&buying=buyitnow&q=${word}`;

      //跳转到京东搜索
      // location.href = `https://so.m.jd.com/ware/search.action?keyword=${word}&searchFrom=home&sf=11&as=1`;
    }
  }
};
