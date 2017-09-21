import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class HomeUI extends React.Component {
	componentDidMount() {
		this.props.fetchListData();
	}
	render() {
		return (
			<div>
				<h1>礼物说</h1>
				<ul>
					{
						this.props.home_list.map((item, index)=>{
							return <li key={"h_l_" + index}>
								<img src={item.logo} />
								<span>{item.shop_name}</span>
								<span>{item.price}</span>
								<Link to={"/detail/" + item.shop_name}>详情</Link>
							</li>;
						})
					}
				</ul>
				<div className="content"></div>
			</div>
		)
	}
}

const mapState2Props = (state) => {
	return {
		home_list: state.home_list
	}
}

const mapDispatch2Props = (dispatch) => {
	return {
		fetchListData: () => {
			fetch("/api/getdata").then((res)=>{
				return res.json();
			}).then((json)=>{
				dispatch({
					type: "GET_HOME_LIST",
					payload: json
				})
			})
		}
	}
}

const Home = connect(mapState2Props, mapDispatch2Props)(HomeUI);
export default Home;