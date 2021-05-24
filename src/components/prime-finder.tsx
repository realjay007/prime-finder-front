import React, { Component } from 'react';
import "./prime-finder.css";

export default class PrimeFinder extends Component {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<input type="number" placeholder="Enter number" className="input" />
					<button>Submit</button>
					<h1 className="inactive">RESULT</h1>
					{/* <h1 className="active">RESULT</h1> */}
				</header>
			</div>
		);
	}
}
