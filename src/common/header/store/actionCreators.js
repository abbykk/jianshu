import * as constants from './constants';
import { fromJS } from 'immutable'
import axios from 'axios';

export const searchFocus=()=>({
     type:constants.SEARCH_FOCUS
})
export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
})
export const mouseEnter=()=>({
    type:constants.MOUSE_ENTER
})
export const mouseLeave=()=>({
    type:constants.MOUSE_LEAVE
})
export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page:page
})




const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const getList=()=>{
      return (dispach)=>{
        axios.get('/jianshu/build/api/headerList.json').then((res)=>{
                const data=res.data
                dispach(changeList(data.data))
        }).catch((err)=>{
            console.log(err)
        })
      }
}