import React, { PureComponent } from 'react';
import {DetailWrapper,Header,Content} from './style'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Detail extends PureComponent {
	
	render() {

		const { content,title }=this.props
		return (
			<DetailWrapper>
				<Header>{title}</Header>
				<Content dangerouslySetInnerHTML={{__html:content}}>
				</Content>
			</DetailWrapper>
		)
	}
    componentDidMount(){
		this.props.getData(this.props.match.params.id)
	}
	
}

const mapState=(state)=>({
	  title:state.getIn(['detail','title']),
	  content:state.getIn(['detail','content']),
})

const mapDispatch=(dispatch)=>({
	getData(id){
		dispatch(actionCreators.getDetail(id))
	}
})
export default connect(mapState,mapDispatch)(withRouter(Detail));
