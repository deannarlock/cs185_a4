import React, { Component } from 'react';
import './Favorites.css'

export class Favorites extends Component {
	render() {
		return (
			<div className="row">
				<div>
					<h3>Music</h3>
					<a href="https://open.spotify.com/playlist/37i9dQZF1DX56bqlsMxJYR">
						<img src={require("./images/zepplin.jpg")}/>
					</a>
				</div>
				<div>
					<h3>Movies</h3>
					<a href="https://www.imdb.com/title/tt0110912/">
						<img src={require("./images/pulp.jpg")}/>
					</a>
				</div>
				<div>
					<h3>Food</h3>
					<a href="https://www.yanksing.com/">
						<img src={require("./images/dim.jpg")}/>
					</a>
				</div>
			</div>
		);
	}
}
export default Favorites;
