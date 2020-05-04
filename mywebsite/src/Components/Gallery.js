import React, { Component } from 'react';
import './Gallery.css'

export class Gallery extends Component {
	constructor(){
		super();
		this.state  = {
			disp: 0
		}
		this.setDisp = () => {
			this.setState({
				disp: 0
			})
		}
		this.setDisp1 = () => {
			this.setState({
				disp: 1
			})
		}
		this.setDisp2 = () => {
			this.setState({
				disp: 2
			})
		}
		this.setDisp3 = () => {
			this.setState({
				disp: 3
			})
		}
		this.setDisp4 = () => {
			this.setState({
				disp: 4
			})
		}
		this.setDisp5 = () => {
			this.setState({
				disp: 5
			})
		}
		this.setDisp6 = () => {
			this.setState({
				disp: 6
			})
		}
		this.displayContent = () => {
			if(this.state.disp == 0) {
				return (
					<div className="gallery">
						<img src={require("./images/images1.jpeg")} onClick={this.setDisp1}/>
						<img src={require("./images/images2.jpeg")} onClick={this.setDisp2}/>
						<img src={require("./images/images3.jpeg")} onClick={this.setDisp3}/>
						<img src={require("./images/images4.jpeg")} onClick={this.setDisp4}/>
						<img src={require("./images/images5.jpeg")} onClick={this.setDisp5}/>
						<img src={require("./images/images6.jpeg")} onClick={this.setDisp6}/>
					</div>
				)
			}
			else if(this.state.disp == 1) {
				return (
					<div onClick={this.setDisp} className="large-image-cont">
						<img src={require("./images/images1.jpeg")} className="large-image"/>
					</div>
				)
			}
			else if(this.state.disp == 2) {
				return (
					<div onClick={this.setDisp} className="large-image-cont">
						<img src={require("./images/images2.jpeg")} className="large-image"/>
					</div>
				)
			}
			else if(this.state.disp == 3) {
				return (
					<div onClick={this.setDisp} className="large-image-cont">
						<img src={require("./images/images3.jpeg")} className="large-image"/>
					</div>
				)
			}
			else if(this.state.disp == 4) {
				return (
					<div onClick={this.setDisp} className="large-image-cont">
						<img src={require("./images/images4.jpeg")} className="large-image"/>
					</div>
				)
			}
			else if(this.state.disp == 5) {
				return (
					<div onClick={this.setDisp} className="large-image-cont">
						<img src={require("./images/images5.jpeg")} className="large-image"/>
					</div>
				)
			}
			else if(this.state.disp == 6) {
				return (
					<div onClick={this.setDisp} className="large-image-cont">
						<img src={require("./images/images6.jpeg")} className="large-image"/>
					</div>
				)
			}
		}
	}
	render() {
		return (
			<div>{this.displayContent()}</div>
		);
	}
}
export default Gallery;
