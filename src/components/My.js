import React from 'react'
import { Button, Input, message } from 'antd';

export default class My extends React.Component {
	login() {
		setTimeout(()=>{
			message.info("登录成功");
		},3000);
	}
	render() {
		return (
			<div>
				<Input placeholder="用户名" />
				<Button onClick={this.login.bind(this)} type="primary">登录</Button>
				
			</div>
		)
	}
} 