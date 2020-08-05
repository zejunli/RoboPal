import React, { Component } from 'react';
import CardList from '../Components/CardList';
// import {robots} from './robots';
import SearchBox from '../Components/SearchBox';
import 'tachyons';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';



class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
	}

	componentDidMount() {
		console.log("sending the request");
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => {return response.json();})
		.then(users => {this.setState({robots: users});})
		console.log("sent the request");
	}

	// use arrow function(non-predefined functions) to prevent the mis-use of 'this'
	// this can be different object depending on the different calling senarios.
	// arrow function, however, does not have its own 'this' binding,
	// so it guarantees that 'this' is from the class(or lexical context)
	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
		// console.log(this.state.robots[0].name.toLowerCase());
	}

	render() {
		const fileteredRobot = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={fileteredRobot} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;