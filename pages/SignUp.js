import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Dialog from '@material-ui/core/Dialog/Dialog';
import './App.css';
import SignUp from '../components/SignUp';
import Logo from './TGO logo.png';
import { getState, reset } from '../redux/actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

  SignUp() {
		fetch('/emailMLS', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				State: this.props.State
			})
		})
		.then((res) => {
			console.log('ORDER SUCCESS!!!', res);
			this.setState({ open: true });
			this.props.reset();
		}).catch(() => {
			console.log('ORDER FAILED PLEASE TRY AGAIN...');
		});
  }

	handleClose = () => {
		this.setState({ open: false });
	};

  render() {
    return (
      <div className="App">
				<Dialog
					open={this.state.open}
					keepMounted
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
				<DialogTitle id="alert-dialog-slide-title">
					{'Confirmation'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Thank you! You will receive a confirmation email with the next steps.
						Be ready for a phone call from one of our service representatives!
						Happy driving!
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleClose} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>

			<img height={'170rem'} src={Logo} alt="Titanium Go" />
				<SignUp />
				<br />

				<Grid container spacing={24}>
					<Grid item sm={4} />
					<Grid item xs={12} sm={2}>
						<Button
							fullWidth onClick={() => this.SignUp()} size={'large'}
							variant="contained" color="primary" disabled={!this.props.State.valid}
						>
							Sign Up
						</Button>
					</Grid>
					<Grid item xs={12} sm={2}>
						<Button fullWidth size={'large'} variant="contained" onClick={() => this.props.reset()}>
							Reset
						</Button>
					</Grid>
					<Grid item sm={4} />
				</Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
	{ State: state.SignUp }
);

export default connect(mapStateToProps, { getState, reset })(App);
