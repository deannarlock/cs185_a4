import React, { Component } from 'react';
import './Videos.css'

export class Videos extends Component {
	render() {
		return (
			<div className="vid-container">
				<div className="vid">
					<h3>Alaska</h3>
					<iframe src="https://www.youtube.com/embed/wFFWOARHE2I" className="yt"></iframe>
				</div>
				<div className="vid">
					<h3>Mt. Tamalpais</h3>
					<iframe src="https://www.youtube.com/embed/HqU4BDE6sTE" className="yt"></iframe>
				</div>
			</div>
		);
	}
}
export default Videos;
