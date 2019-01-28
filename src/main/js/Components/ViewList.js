'use strict';

// tag::vars[]
const React = require('react');
import { ViewNode } from './ViewNode.js'
// end::vars[]




export class ViewList extends React.Component {
    render() {
        var nodes = this.props.nodes.map(node =>
            <ViewNode key={node._links.self.href} node={node} />
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    {nodes}
                </tbody>
            </table>
        )
    }
}
