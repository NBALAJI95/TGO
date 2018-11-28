import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardBody, CardTitle, CardHeader, Button } from 'reactstrap';
import { addToCart, removeFromCart } from '../redux/actions';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        };
    }

    decrementHandler(event) {
        if(this.state.quantity > 1) {
            this.setState({quantity: (this.state.quantity - 1)});
        } else if(this.state.quantity === 1) {
            this.props.removeFromCart(event.target.id);
        }
    }

    incrementHandler(event) {
        if(this.state.quantity < this.props.quantityAvailable) {
            this.setState({quantity: (this.state.quantity + 1)});
        } else {
            alert(`Only ${this.props.quantityAvailable} for the item ${this.props.name} are in stock!!!`);
        }
    }

    addItem(event, data) {
        this.props.addToCart({...data.filter((item) => {
            return item.id === event.target.id;
        })[0], quantity: this.state.quantity});
    }

    renderButton(cart, data, id) {
        const items = cart.filter((item) => {
            return item.id === id;

        });
        if(items.length === 0) {
            return (
                <Button id={id} onClick={(evt) => this.addItem(evt, data)} block color="success">Add to Cart</Button>
            );
        }
        else if(items[0].quantity !== this.state.quantity) {
            return (
                <Button id={id} onClick={(evt) => this.addItem(evt, data)} block color="success">
                    Change Quantity
                </Button>
            );
        } else {
            return (
                <Button id={id} disabled block color="secondary">Add to Cart</Button>
            );
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps', nextProps.reset);
        if(nextProps.reset)
            this.setState({quantity: 1});
    }

    render()
    {
        const {priceTextStyle, roundedButton} = styles;
        const { imageURL, name, price, id, cart, data } = this.props;

        return (
            <div style={{margin: '1rem'}}>
                <Card>
                    <img style={{objectFit: 'contain'}} height='200rem' src={imageURL} alt={`${this.props.name}`}/>
                    <CardHeader> <span style={priceTextStyle}> $ {parseFloat(price)} </span> </CardHeader>
                    <CardBody style={{padding: '1rem'}}>
                        <CardTitle> {name} </CardTitle>
                        <CardText>
                            <Button id={id} style={roundedButton} onClick={(evt) => this.decrementHandler(evt)}>-</Button>
                            <span style={{padding: '0 1.5rem'}}> {this.state.quantity} </span>
                            <Button style={roundedButton} onClick={(evt) => this.incrementHandler(evt)}>+</Button>
                        </CardText>
                        {this.renderButton(cart, data, id )}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const styles = {
    priceTextStyle: {
        fontWeight: 'bold',
        fontSize: '1.3rem'
    },
    roundedButton: {
        borderRadius: '50%'
    }
};

export default connect(null, {addToCart, removeFromCart})(ProductCard);
