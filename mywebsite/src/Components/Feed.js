import React, { Component } from 'react';
import config from '../config'
import Post from './Post'
import InputBox from './InputBox'
import './Feed.css'
const firebase = require('firebase')

export class Feed extends Component {

	constructor() {
		super();
		this.state = {
			data: [],
			inputName: "Dean",
			inputDesc: "HEy",
			inputMessage: "Yo",
			inputAllow: "YEs",
			inputEmail: "deannarlock@yo.com"
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.displayPosts = this.displayPosts.bind(this);
	}
	handleSubmit(event) {
		var obj = {};
		obj['name'] = this.state.inputName
		obj['desc'] = this.state.inputDesc
		obj['message'] = this.state.inputMessage
		obj['allow'] = this.state.inputAllow
		obj['email'] = this.state.inputEmail
		firebase.database().ref('data').push().set(obj);
	}
	componentDidMount(){
		if (!firebase.apps.length) {
			firebase.initializeApp(config)
			let ref = firebase.database().ref('data')
			ref.on('value', snapshot => {
				const data = snapshot.val()
				this.setState({data: data})
			})
		}
	}
	componentDidUpdate(prevProps, prevState, snapshoyt){
		if(this.state.shouldUpdate != prevState.shouldUpdate){
			firebase.initializeApp(config)
			let ref = firebase.database().ref('data')
			ref.on('value', snapshot => {
				const data = snapshot.val()
				this.setState({data: data})
			})
		}
	}
	displayPosts(data) {
		for(var key in data) {
			console.log(key)
			return <Post data={key}/>
		}
	}
	render() {
		return (
			<div className="feed-page">
				<div onClick={this.handleSubmit}>Hey</div>
				<div className="user-side">
					<InputBox/>
				</div>
				<div className="view-side">
					<div>		 
						{this.displayPosts(this.state.data)}
					</div>
				</div>
			</div>
		);
	}
}
export default Feed;
