import React, { Component } from 'react';
import './Home.css'

export class Home extends Component {
	render() {
		return (
			<div className="home-body">
				<div className = "image-div">
					<img src={require("./images/home.jpeg")} className = "profile-image"/> 
				</div>
				<div className="profile-text">
					<h3>About Me.</h3>
					<p>This webpage contains information about me. Navigate through the tabs to check out places I've been, things I've seen and content I'm interested in.</p>
				</div>
			</div>
		);
	}
}
export default Home;