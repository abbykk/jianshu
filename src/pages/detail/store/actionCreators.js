import axios from 'axios';
import * as constants from './constants';



export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/jianshu/build/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data[Number(id)-1];
			dispatch({
                type: constants.CHANGE_DETAIL,
                title:result.title,
                content:result.content
            });
		}).catch(() => {
			
		})
	}
};