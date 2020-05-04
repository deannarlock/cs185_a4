import React, { Component } from 'react';
import './Images.css'
import Gallery from './Gallery'
import ScrollUpButton from "react-scroll-up-button";

export class Images extends Component {
	render() {
		return (	
			<div>
				<Gallery/>
				<div>
					<ScrollUpButton/>
				</div>
			</div>
		);
	}
}
export default Images;
