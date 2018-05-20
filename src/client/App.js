import React, { Component } from 'react';
import {blueGrey700,grey600,fullWhite,deepPurpleA200,deepPurpleA400,deepPurpleA100,white,grey500} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TopBar from './components/topbar';
import './app.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { username: null };
	}

	componentDidMount() {
		fetch('/api/getUsername')
			.then(res => res.json())
			.then(user => this.setState({ username: user.username }));
	}
	render() {
		const muiTheme = getMuiTheme({
			fontFamily: 'Roboto, sans-serif',
			borderRadius: 2,
			palette: {
			  primary1Color: blueGrey700,
			  primary2Color: blueGrey700,
			  primary3Color: grey600,
			  accent1Color: deepPurpleA200,
			  accent2Color: deepPurpleA400,
			  accent3Color: deepPurpleA100,
			  textColor: fullWhite,
			  secondaryTextColor: (0, fade)(fullWhite, 0.7),
			  alternateTextColor: white,
			  canvasColor: grey500,
			  borderColor: (0, fade)(fullWhite, 0.3),
			  disabledColor: (0, fade)(fullWhite, 0.3),
			  pickerHeaderColor: (0, fade)(fullWhite, 0.12),
			  clockCircleColor: (0, fade)(fullWhite, 0.12)
			}
		  });
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<TopBar />
			</MuiThemeProvider>
		);
	}
}