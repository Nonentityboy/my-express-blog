import * as constants from './constants';
import { fromJS } from 'immutable';
// immutable.js Facebook开发的库 immutable对象不可改变
// from JS把里面数组为immutable数组，而直接set的为普通数组
const defaultState = fromJS({
    focused: false,
    list: [],
    page:1,
    totalPage:1
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，，会结合之前immutable对象的值
        // 和设置的值，返回一个全新的对象
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if (action.type === constants.CHANGE_LIST){
        return state.set('list',action.data).set('totalPage',action.totalPage);
    }
    return state;
}