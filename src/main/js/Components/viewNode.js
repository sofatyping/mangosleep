'use strict';

// tag::vars[]
const React = require('react');
// end::vars[]


// tag::user-list[]
export class ViewNode extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.node.nodeType}</td>
				<td>{this.props.node.title}</td>
			</tr>
		)
	}
}
