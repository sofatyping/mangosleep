'use strict';

import { relative } from 'path';

const React = require('react');

export class ViewNode extends React.Component {

	render() {
		var container = {
			'position': 'relative',
			'width': '250',
			'maxWidth': '250',
			'maxHeight': '250',
			'marginRight': '15px',
		}
		var imgStyle = {
			'borderRadius': '8px',
			'display': 'block',
			'width': '250',
			'height': '250',
			'maxWidth': '100%'
		}
		var descriptionStyle = {
			'position': 'absolute',
			'bottom': '0',
			'background': 'rgb(0, 0, 0)',
			'color': 'white',
			'width': '100%',
			'opacity': '0.7',
			'fontSize': '20px',
			'padding': '20px',
			'textAlign': 'center',
		}

		return (
			<div style={container}>
				<img style={imgStyle} src={this.props.trip.imgUrl} alt={this.props.trip.title}></img>
				<div style={descriptionStyle} className="text">{this.props.trip.title}</div>
			</div>
		)
	}
}
