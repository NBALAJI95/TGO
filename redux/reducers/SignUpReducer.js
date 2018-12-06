const INITITAL_STATE = () => ({
	name: '',
	email: '',
	phoneNumber: '',
	address: { line1: '', line2: '', city: '', state: '', zip: '' },
	driveFor: { Uber: false, Lyft: false, Neither: false },
	fullTimeOrPartTime: '',
	ridesPerWeek: '',
	commission: '',
	referredBy: '',
	valid: false
});

const formValid = (state) => {
	const {
		name, email, phoneNumber, address, driveFor,
		fullTimeOrPartTime, ridesPerWeek, commission
	} = state;
	if (name.length > 0 && email.length > 0 && phoneNumber.length >= 10
		&& address.line1.length > 0	&& address.city.length > 0
		&& (address.state && address.state.value.length > 0) && address.zip.length > 0
		&& (driveFor.Uber || driveFor.Lyft || driveFor.Neither)
		&& fullTimeOrPartTime.length > 0 && ridesPerWeek.length > 0
		&& commission.length > 0) {
		return { ...state, valid: true };
	}
	return { ...state, valid: false };
};

const validate = (state) => {
	const { driveFor } = state;
	const { Uber, Lyft, Neither } = driveFor;
	let modify = {};
	if ((Uber || Lyft)) {
		modify = { Neither: false };
	} else if (Neither) {
			modify = { Uber: false, Lyft: false };
		}
	return formValid({ ...state, driveFor: { ...driveFor, ...modify } });
};

export default (state = INITITAL_STATE(), action) => {
	switch (action.type) {
		case 'SET_STATE':
			if (action.payload.property.indexOf('_') > 0) {
				// address
				const prop = action.payload.property.split('_');
				if (prop[0].startsWith('driveFor')) {
					return validate(
					{
						...state,
						[prop[0]]: { ...state[prop[0]], [prop[1]]: action.payload.value }
					});
				}
				return formValid(
					{ ...state, [prop[0]]: { ...state[prop[0]], [prop[1]]: action.payload.value } });
			} return formValid({ ...state, [action.payload.property]: action.payload.value });
		case 'RESET':
			return INITITAL_STATE();
		default:
			return state;
	}
};
