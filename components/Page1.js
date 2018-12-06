import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import Select from 'react-select';
import { setState } from '../redux/actions';
import InputWithLabel from './InputWithLabel';
import { states } from './US_States';

class Page1 extends React.Component {
	textHandler(event, id) {
		this.props.setState(id, event.target.value);
	}

	render() {
		const { name, email, phoneNumber, address } = this.props.State;
		return (
			<div>
				<InputWithLabel
					id={'name'} value={name} label='Name'
					onChange={(evt) => this.textHandler(evt, 'name')}
				/>
				<InputWithLabel
					id={'email'} value={email} label='E-mail' type={'email'}
					onChange={(evt) => this.textHandler(evt, 'email')}
				/>
				<InputWithLabel
					id={'phoneNumber'} value={phoneNumber} label='Phone Number' type={'tel'}
					onChange={(evt) => this.textHandler(evt, 'phoneNumber')}
				/>
				<InputWithLabel
					id={'address_line1'} value={address.line1} label='Address Line 1'
					onChange={(evt) => this.textHandler(evt, 'address_line1')}
				/>
				<InputWithLabel
					id={'address_line2'} value={address.line2} label='Address Line 2' required={false}
					onChange={(evt) => this.textHandler(evt, 'address_line2')}
				/>
				<Grid container align="center">
					<Grid item xs={4}>
						<TextField
							id={'city'} type={'text'} label='City' value={address.city}
							margin="normal" style={{ width: '80%' }} required
							onChange={(evt) => this.textHandler(evt, 'address_city')}
						/>
					</Grid>

					<Grid item md={1} />
					<Grid item xs={4} md={2}>
						<br />
						<Select
							value={address.state} options={states} placeholder={'STATE'}
							onChange={(val) => this.textHandler({ target: { value: val } },
								'address_state')}
						/>
					</Grid>
					<Grid item md={1} />

					<Grid item xs={4}>
						<TextField
							id='zip' type={'number'} label='Zip' value={address.zip}
							margin="normal" style={{ width: '80%' }} required
							onChange={(evt) => this.textHandler(evt, 'address_zip')}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('State', state);
	return { State: state.SignUp };
};

export default connect(mapStateToProps, { setState })(Page1);
