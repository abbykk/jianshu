import axios from 'axios';
import * as constants from './constants';


export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})

export const login = (account, password) => {
	return (dispatch) => {
		axios.get('/jianshu/build/api/login.json?account=' + account + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch({
					type: constants.CHANGE_LOGIN,
					value: true
				})
			} else {
				alert('登陆失败')
			}
		})
	}
}
