import React, { PureComponent, Fragment } from 'react';
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import { connect } from 'react-redux'

import { actionCreators } from './store'

import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';

class Home extends PureComponent {
	handleScrollTop(){
		window.scrollTo(0,0)
	}
	bindEvent(){
		window.addEventListener('scroll',this.props.changeScroll)
	}
	render() {
		return (
			<Fragment>
				<HomeWrapper>
					<HomeLeft>
						<img className='banner-img' alt="" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
						<Topic />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommend />
						<Writer />
					</HomeRight>
				</HomeWrapper>
				{this.props.showScroll&&<BackTop onClick={()=>{this.handleScrollTop()}}>顶部</BackTop>}
				
			</Fragment>

		)
	}
	
	componentDidMount() {
		this.props.changeHomeData()
		this.bindEvent()
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScroll)
	}

}
const mapState=(state)=>({
	showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispach) => ({
	changeHomeData() {
		dispach(actionCreators.getHomeInfo())
	},
	changeScroll(e){
		if(document.documentElement.scrollTop>400){
			dispach(actionCreators.toggleTopShow(true))
		}else{
			dispach(actionCreators.toggleTopShow(false))
		}
	}
})

export default connect(mapState, mapDispatch)(Home);
