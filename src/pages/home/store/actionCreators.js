import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';


const changeHomeDate=(result)=>({
    
})

export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
			const action = {
				type: constants.CHANGE_HOME_DATA,
				topicList: result.topicList,
				articleList: result.articleList,
				recommendList: result.recommendList
            }
			dispatch(action)
		})
    }
}
export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+(page+1)).then((res) => {
            const result = res.data.data
			const action = {
				type: constants.ADD_ARTICLE_LIST,
                list: fromJS(result),
                page:page+1
            }
			dispatch(action)
		})
    }
}



export const toggleTopShow=(falg)=>({
       type:constants.TOGGLE_SCROLL_TOP,
       show:falg
})

