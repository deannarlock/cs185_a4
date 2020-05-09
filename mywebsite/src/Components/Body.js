import React, { Component } from 'react';
import Home from './Home'
import Images from './Images'
import Videos from './Videos'
import Favorites from './Favorites'
import Feed from './Feed'

export class Body extends Component {
	displayContent = () => {
		var activeTab = this.props.activeTab
		if(activeTab == 1) {
			return <Home/>
		}
		else if(activeTab == 2) {
			return <Images/>
		}
		else if(activeTab == 3){
			return <Videos/>
		}
		else if(activeTab == 4) {
			return <Favorites/>
		}
		else {
			return <Feed/>
		}

	}
	render() {
		return (
			<div>{this.displayContent()}</div>
		);
	}
}
export default Body;
