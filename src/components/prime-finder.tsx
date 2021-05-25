import React, { ChangeEvent, Component } from 'react';
import { findLowerPrime } from '../lib/api';
import "./prime-finder.css";

type State = {
	input?: number,
	result?: number,
}

export default class PrimeFinder extends Component<{}, State> {
	state: State = {}

	private onInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const input = Number(ev.target.value);
		this.setState({ input });
	}

	private renderResult() {
		const { result = null } = this.state;
		if (result) return <h1 className="active">{result}</h1>;
		return <h1 className="inactive">RESULT</h1>
	}

	private onSubmit = async () => {
		const { input = null } = this.state;
		if (typeof input !== 'number') return alert('Please enter a number');

		const response = await findLowerPrime(input);
		const result: number = response.data;
		this.setState({ result });
	}

	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<input type="number" placeholder="Enter number" className="input" min="3" onChange={this.onInputChange} />
					<button onClick={this.onSubmit}>Submit</button>
					{this.renderResult()}
				</header>
			</div>
		);
	}
}
