import React, { Component } from 'react';

export class Post extends Component {
	render() {
		return (
			<div>{this.props.data}</div>
		);
	}
}
export default Post
