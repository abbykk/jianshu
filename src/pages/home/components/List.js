import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { list, getMoreList, articlePage } = this.props
		return (
			<Fragment>
				{
					list.map((item, index) => (

						<Link key={index} to={'/detail/' + item.get('id')}>
							<ListItem >
								<img alt='' className='pic' src={item.get('imgUrl')} />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						</Link>
					))
				}
				<LoadMore onClick={() => getMoreList(articlePage)}>更多</LoadMore>
			</Fragment>

		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	articlePage: state.getIn(['home', 'articlePage']),

})

const mapDispathToProps = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState, mapDispathToProps)(List)