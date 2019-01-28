'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import { ViewList } from './Components/ViewList.js'
import { NavigationBarHeader } from './Components/NavigationBarHeader.js'

// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { users: [], nodes: [] };
	}

	componentDidMount() {
		// TODO: replace to get the real nodes from backend
		client({ method: 'GET', path: '/api/nodes' }).then(response => {
			this.setState({ nodes: response.entity._embedded.nodes });
		});
	}

	render() {
		console.log(this.state.nodes)
		return (
			<div>
				<NavigationBarHeader></NavigationBarHeader>
				<ViewList nodes={this.state.nodes} />
			</div>

		)
	}
}
// end::app[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]