'use strict';

const React = require('react');
import { ViewNode } from './ViewNode.js';

export class ViewRow extends React.Component {

    render() {
        var trips = this.props.row.children.map(trip =>
            <ViewNode trip={trip} />
        )
        var tripStyle = {
            'padding': '1rem',
            'border': '2px solid #fff',
            'color': '#fff',
            'textAlign': 'center',
            'display': 'flex',
            'flexDirection': 'row',
            'marginTop': '30'
        }
        var rowTitleContainer = {
            'marginTop': '30px',
            'paddingLeft': '30px'

        }
        var rowTitle = {
            'fontSize': '20px',
            'fontWeight': 'bold'
        }

        return (
            <div style={rowTitleContainer}>
                <p style={rowTitle}>{this.props.row.title} </p>
                <div
                    style={tripStyle} >
                    {trips}
                </div>
            </div >
        )
    }
}