import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardHeader, Button } from 'reactstrap';

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
        }
    }

    incrementHandler(event) {
        if(this.state.quantity < this.props.quantityAvailable) {
            this.setState({quantity: (this.state.quantity + 1)});
        } else {
            alert(`Only ${this.props.quantityAvailable} for the item ${this.props.name} are in stock!!!`);
        }
    }

    render()
    {
        const {priceTextStyle, roundedButton} = styles;
        const { imageURL, name, price } = this.props;
        return (
            <div style={{margin: '1rem'}}>
                <Card>
                    <img style={{objectFit: 'contain'}} height='200rem' src={imageURL} alt={`Image of ${this.props.name}`}/>
                    <CardHeader> <span style={priceTextStyle}> $ {parseFloat(price)} </span> </CardHeader>
                    <CardBody style={{padding: '1rem'}}>
                        <CardTitle> {name} </CardTitle>
                        <CardText>
                            <Button style={roundedButton} onClick={(evt) => this.decrementHandler(evt)}>-</Button>
                            <span style={{padding: '0 1.5rem'}}> {this.state.quantity} </span>
                            <Button style={roundedButton} onClick={(evt) => this.incrementHandler(evt)}>+</Button>
                        </CardText>
                        <Button block color="success">Add to Cart</Button>
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

export default ProductCard;