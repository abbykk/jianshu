import * as constants from './constants';
import { fromJS } from 'immutable'

//state不可以被改变  使用immutable  不可被改变


const defaultState = fromJS({
	focused: false,
	list: [],
	page: 1,
	totalPage: 1,
	mouseIn: false
})

export default (state = defaultState, action) => {
	//immutable 的 set方法 会结合之前的state 和设置的值 返回一个新的值
	switch (action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.merge({
				list:action.data,
				totalPage:action.totalPage
			})
			//return state.set('list', action.data).set('totalPage', action.totalPage);
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}
