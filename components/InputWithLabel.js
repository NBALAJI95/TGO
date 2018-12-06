import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";
import Grid from '@material-ui/core/Grid';

class InputWithLabel extends React.Component {
    render() {
        const { id, value, type, label, onChange } = this.props;
        return (
            <div>
                <Grid container align="center">
                    <Grid item xs={1} sm={2} md={3} />
                    <Grid item xs={10} sm={8} md={6}>
                        {(this.props.children) ? this.props.children :
                        <TextField
                            id={id} value={value} onChange={onChange} type={type}
                            label={label} margin="normal" fullWidth required={this.props.required}
                        />}
                    </Grid>
                    <Grid item xs={2} sm={2} md={3} />
                </Grid>
            </div>
        );
    }
}

InputWithLabel.defaultProps = {
	type: 'text',
	required: true
};

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
	label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
};

export default InputWithLabel;