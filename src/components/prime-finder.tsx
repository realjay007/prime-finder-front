import React, { ChangeEvent, Component } from 'react';
import Loader from 'react-spinners/PulseLoader';
import { findLowerPrime } from '../lib/api';
import "./prime-finder.css";

type State = {
	input?: number,
	result?: number,
	loading: boolean,
}

export default class PrimeFinder extends Component<{}, State> {
	state: State = {
		loading: false,
	}

	private onInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const input = Number(ev.target.value);
		this.setState({ input });
	}

	private onSubmit = async () => {
		const { input = null, loading } = this.state;
		if (loading) return;
		if (typeof input !== 'number') return alert('Please enter a number');

		this.setState({ loading: true });
		const response = await findLowerPrime(input);
		const result: number = response.data;
		this.setState({ result, loading: false });
	}

	private renderResult() {
		const { result = null } = this.state;
		if (result) return <h1 className="active">{result}</h1>;
		return <h1 className="inactive">RESULT</h1>
	}

	public render() {
		const { loading } = this.state;

		return (
			<div className="prime-finder">
				<h3 className="prime-finder__title">Find highest prime number lower than input number</h3>
				<div className="prime-finder__body">
					<input type="number" placeholder="Enter number" className="input" min="3" onChange={this.onInputChange} />
					<button onClick={this.onSubmit}>
						{loading ? (<Loader color="#fff" />) : 'Submit'}
					</button>
					{this.renderResult()}
				</div>
			</div>
		);
	}
}
