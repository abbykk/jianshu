import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		const { list } = this.props
		return (
			<Fragment>
				<RecommendWrapper>
					{
						list.map((item) => (
							<RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
						))
					}

				</RecommendWrapper>
			</Fragment>

		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})


export default connect(mapState, null)(Recommend)