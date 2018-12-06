import React from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl/FormControl';
import Grid from '@material-ui/core/Grid/Grid';
import FormLabel from '@material-ui/core/FormLabel/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import Radio from '@material-ui/core/Radio/Radio';
import InputWithLabel from './InputWithLabel';
import { setState } from '../redux/actions';

class Page2 extends React.Component {
	handleCheck = (name, id) => event => {
		this.props.setState(id, event.target.checked);
	};

	handleRadio = (event, stateLabel) => {
		this.props.setState(stateLabel, event.target.value);
	};

	textHandler(event, id) {
		this.props.setState(id, event.target.value);
	}

	render() {
		const {
			driveFor,
			fullTimeOrPartTime,
			ridesPerWeek,
			drivingDuration,
			commission,
			referredBy
		} = this.props.State;

		const { formControlStyle, formLabelStyle, radioStyle } = styles;

		return (
			<div>
				<br />
				<FormControl component="fieldset">
					<Grid container align="center">
						<Grid item xs={12} sm={6}>
							<FormLabel style={{ marginTop: '1rem', marginRight: '1rem' }} component="legend">
								{' I drive for: (Check all that apply) '}
							</FormLabel>
						</Grid>

						<Grid item xs={4} sm={2}>
							<FormControlLabel
								control={
									<Checkbox
										color="primary"
										checked={driveFor.Uber}
										onChange={this.handleCheck('Uber', 'driveFor_Uber')}
										value="Uber"
									/>
								}
								label="Uber"
							/>
						</Grid>

						<Grid item xs={4} sm={2}>
							<FormControlLabel
								control={
									<Checkbox
										color="primary"
										checked={driveFor.Lyft}
										onChange={this.handleCheck('Lyft', 'driveFor_Lyft')}
										value="Lyft"
									/>
								}
								label="Lyft"
							/>
						</Grid>

						<Grid item xs={4} sm={2}>
							<FormControlLabel
								control={
									<Checkbox
										color="primary"
										checked={driveFor.Neither}
										onChange={this.handleCheck('Neither', 'driveFor_Neither')}
										value="Neither"
									/>
								}
								label="Neither"
							/>
						</Grid>
					</Grid>
				</FormControl>

				<br />
				<FormControl>
					<RadioGroup
						style={{ display: 'flex', flexDirection: 'row' }}
						aria-label="ridesPerWeek"
						name="ridesPerWeek"
						value={fullTimeOrPartTime}
						onChange={(evt) => { this.handleRadio(evt, 'fullTimeOrPartTime'); }}
					>
						<FormControlLabel
							value={'fullTime'}
							control={<Radio style={radioStyle} color="primary" />}
							label="Full Time"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'partTime'}
							control={<Radio style={radioStyle} color="primary" />}
							label="Part Time"
							labelPlacement="end"
						/>
					</RadioGroup>
				</FormControl>

				<br />

				<FormControl style={formControlStyle}>
					<FormLabel style={formLabelStyle} component="legend">
						How many rides per week?
					</FormLabel>

					<RadioGroup
						style={{ display: 'flex', flexDirection: 'row' }}
						aria-label="ridesPerWeek"
						name="ridesPerWeek"
						value={ridesPerWeek}
						onChange={(evt) => { this.handleRadio(evt, 'ridesPerWeek'); }}
					>
						<FormControlLabel
							value={'<5'}
							control={<Radio style={radioStyle} color="primary" />}
							label="Less than 5"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'6-15'}
							control={<Radio style={radioStyle} color="primary" />}
							label="6 - 15"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'16-30'}
							control={<Radio style={radioStyle} color="primary" />}
							label="16 - 30"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'31-60'}
							control={<Radio style={radioStyle} color="primary" />}
							label="31 - 60"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'60+'}
							control={<Radio style={radioStyle} color="primary" />}
							label="60+"
							labelPlacement="end"
						/>

					</RadioGroup>
				</FormControl>

				<FormControl style={formControlStyle}>
					<FormLabel style={formLabelStyle} component="legend">
						How long have you been driving?
					</FormLabel>

					<RadioGroup
						style={{ display: 'flex', flexDirection: 'row' }}
						aria-label="drivingDuration"
						name="drivingDuration"
						value={drivingDuration}
						onChange={(evt) => { this.handleRadio(evt, 'drivingDuration'); }}
					>

						<FormControlLabel
							value={'Less than 6 months'}
							control={<Radio style={radioStyle} color="primary" />}
							label="Less than 6 months"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'6 months - 1 year'}
							control={<Radio style={radioStyle} color="primary" />}
							label="6 months - 1 year"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'1 year - 2 years'}
							control={<Radio style={radioStyle} color="primary" />}
							label="1 year - 2 years"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'2 years - 3 years'}
							control={<Radio style={radioStyle} color="primary" />}
							label="2 years - 3 years"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'3+ years'}
							control={<Radio style={radioStyle} color="primary" />}
							label="3+ years"
							labelPlacement="end"
						/>

					</RadioGroup>
				</FormControl>

				<FormControl style={formControlStyle}>
					<FormLabel style={formLabelStyle} component="legend">
						Commission option
					</FormLabel>

					<RadioGroup
						style={{ display: 'flex', flexDirection: 'row' }}
						aria-label="drivingDuration"
						name="drivingDuration"
						value={commission}
						onChange={(evt) => { this.handleRadio(evt, 'commission'); }}
					>
						<FormControlLabel
							value={'80% commission'}
							control={<Radio style={radioStyle} color="primary" />}
							label="I would like to buy my products upfront (80% commission)"
							labelPlacement="end"
						/>

						<FormControlLabel
							value={'50% commission'}
							control={<Radio style={radioStyle} color="primary" />}
							label="I want $ 0 upfront (50% commission)"
							labelPlacement="end"
						/>
					</RadioGroup>
				</FormControl>
				<InputWithLabel
					id={'referredBy'} value={referredBy} label='I was referred by'
					onChange={(evt) => this.textHandler(evt, 'referredBy')} required={false}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => (
	{ State: state.SignUp }
);

const styles = {
	formControlStyle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'row'
	},
	formLabelStyle: {
		margin: '1rem',
		marginBottom: 'inherit'
	},
	radioStyle: {
		width: 'auto'
	}
};

export default connect(mapStateToProps, { setState })(Page2);
