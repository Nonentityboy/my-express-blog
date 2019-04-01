import { fromJS } from 'immutable';
import * as constants from './constants';
// immutable.js Facebook开发的库 immutable对象不可改变
// from JS把里面数组为immutable数组，而直接set的为普通数组
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state,action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
}

const addarticlelist = (state,action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action)
        case constants.ADD_ARTICLE_LIST:
            return addarticlelist(state,action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        // console.log(action)
        // return state.set('articleList',state.get(fromJS('articleList'.concat(action.list))))
        default:
            return state;
    }
}