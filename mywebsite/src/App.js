import React, { Component } from 'react';
import './App.css'
import TabList from './Components/TabList'
import Body from './Components/Body'

export class App extends Component {
	constructor(){
		super();
		this.state = {
			activeTab: 1
		}
		this.changeTab = (id) => {
			this.setState({
				activeTab: id
			})
		}
		this.header = (id) => {
			if(id == 1) {
				return "Home"
			}
			else if(id == 2) {
				return "Images"
			}
			else {
				return "Videos"
			}
		}
	}
	render() {
		const tabs = [
		{
			id: 1,
			title: 'Home'
		},
		{
			id: 2,
			title: 'Images'
		},
		{
			id: 3,
			title: 'Places'
		},
		{
			id: 4,
			title: 'Favorites'
		}
		]
		return (
			<div className="page">
				<div>
					<h1>{this.header(this.state.activeTab)}</h1>
				</div>
				<div className="body">
					<div className="nav-bar">
						<TabList tabs={tabs}
						changeTab={this.changeTab} 
						activeTab={this.state.activeTab}/>
					</div>
					<div className="main-body">
						<Body activeTab={this.state.activeTab}/>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
