import React, { Component } from 'react';
import Tab from './Tab'
import './TabList.css'

export class TabList extends Component {
	render() {
		return (
			<div className="nav-bar">		 
				{this.props.tabs.map((tab) => (
					<Tab tab={tab}
					changeTab={this.props.changeTab}
					activeTab={this.props.activeTab}/>
				))}
			</div>
		)
	}
}
export default TabList;
