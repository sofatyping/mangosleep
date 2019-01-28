'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import { ViewRow } from "./Components/ViewRow.js";
import { NavigationBarHeader } from './Components/NavigationBarHeader.js'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { users: [], rows: [] };
	}

	componentWillMount() {
		var row1 = {
			'title': "Hot Destinations",
			'viewType': "RowNode",
			'children': [
				{
					'title': 'Oregon',
					'viewType': 'TripNode',
					'imgUrl': 'https://www.planetware.com/photos-large/USOR/us-oregon-crater-lake.jpg'
				},
				{
					'title': 'Seattle',
					'viewType': 'TripNode',
					'imgUrl': 'https://static-40.sinclairstoryline.com/resources/media/93086f48-22ce-4f32-92e6-33359042d4dc-large16x9_moon.jpg?1541090121781'
				},
				{
					'title': 'California',
					'viewType': 'TripNode',
					'imgUrl': 'https://www.whatsoninsanfrancisco.com/wp-content/uploads/2017/02/Golden-Gate.jpg'
				},
			]
		}
		var row2 = {
			'title': "Popular Trips",
			'viewType': "RowNode",
			'children': [
				{
					'title': 'Iceland',
					'viewType': 'TripNode',
					'imgUrl': 'https://www.setaswall.com/wp-content/uploads/2017/03/Mountains-Landscapes-Nature-Iceland-Wallpaper-768x480.jpg'
				},
				{
					'title': 'Greece',
					'viewType': 'TripNode',
					'imgUrl': 'https://studycheapoverseas.com/wp-content/uploads/2018/10/greece-p.jpg'
				},
				{
					'title': 'Istanbul',
					'viewType': 'TripNode',
					'imgUrl': 'https://www.goldentoursistanbul.com/wp-content/uploads/2017/03/cappadocia-ballon-tours.jpg'
				},
			]
		}

		var row3 = {
			'title': "Newly Posted",
			'viewType': "RowNode",
			'children': [
				{
					'title': 'Hokkaido',
					'viewType': 'TripNode',
					'imgUrl': 'https://cdn-images-1.medium.com/max/2200/0*kZ_GuI1ahSKM75xj'
				},
				{
					'title': 'Florence',
					'viewType': 'TripNode',
					'imgUrl': 'https://21xljsabc341tejy8i1xb212-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/fun-facts-about-bangkok.jpg'
				},
				{
					'title': 'Barcelona',
					'viewType': 'TripNode',
					'imgUrl': 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/editorial/blogs/fullset/erica/barcelona.jpg.rend.hgtvcom.616.462.suffix/1462288704708.jpeg'
				},
			]
		}
		var tree = {
			'rows': [row1, row2, row3]
		}
		this.setState({ rows: tree })
	}



	render() {

		if (this.state.rows) {
			var rows = this.state.rows.rows.map(row =>
				<ViewRow row={row} />
			)
			return (
				<div>
					<NavigationBarHeader></NavigationBarHeader>
					{rows}
				</div>

			)
		}
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)
