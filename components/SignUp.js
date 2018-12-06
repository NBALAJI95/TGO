import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import NoSsr from '@material-ui/core/NoSsr/NoSsr';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import Paper from '@material-ui/core/Paper/Paper';
import Button from '@material-ui/core/Button/Button';
import Hidden from '@material-ui/core/Hidden/Hidden';
import { connect } from 'react-redux';
import Page1 from './Page1';
import Page2 from './Page2';
import { setState } from '../redux/actions';

function LinkTab(props) {
	return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { value } = this.state;
		return (
			<div>
				<h2> Sign Up </h2>
				<Grid container align="center">
					<Grid item lg={2} sm={1} />

					<Grid item lg={8} xs={12} sm={10}>
						<NoSsr>
							<div>
								<AppBar position="static">
									<Tabs fullWidth value={value} onChange={this.handleChange}>
										<LinkTab label="Page One" href="page1" />
										<LinkTab label="Page Two" href="page2" />
									</Tabs>
								</AppBar>
								{value === 0 &&
								/*' PART ONE '*/
								<Paper>
									<Page1 />
									<Grid container spacing={24}>
										<Grid item sm={4} />
										<Grid item xs={12} sm={4}>
											<Button
												fullWidth size={'large'} variant="contained" color="primary"
												style={{ backgroundColor: '#4caf50' }}
												onClick={() => { this.setState({ value: 1 }); }}
											>
												Next
											</Button>
										</Grid>
										<Hidden xsDown>
											<Grid item sm={4} />
										</Hidden>
									</Grid>
								</Paper>
								}
								{value === 1 &&
								<Paper>
									<Page2 />
									<Grid container spacing={24}>
										<Grid item sm={4} />
										<Grid item xs={12} sm={4}>
											<Button
												fullWidth size={'large'} variant="contained"
												color="primary"
												style={{ backgroundColor: '#4caf50' }}
												onClick={() => {
													this.setState({ value: 0 });
												}
											}
											>
												Previous
											</Button>
										</Grid>
										<Hidden xsDown>
											<Grid item sm={4} />
										</Hidden>
									</Grid>
								</Paper>
								}
							</div>
						</NoSsr>
					</Grid>

				</Grid>
				{console.log(this.props.State)}
			</div>
		);
	}
}

const mapStateToProps = (state) => (
	{ State: state.SignUp }
);

export default connect(mapStateToProps, { setState })(SignUp);
