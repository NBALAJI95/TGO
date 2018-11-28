import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions';

class Checkout extends React.Component {
    onClose(event) {
        this.props.removeFromCart(event.target.id);
    }

    renderCartItem(key, url, name, price, qty, id) {
        return (
            <div id='CheckoutCard' key={key} className="row" style={{backgroundColor: '#EEE', padding: '0.7rem', marginBottom: '0.5rem'}}>
                {/*{key+1}*/}
                <div className="col-4">
                    <center> <img src={url} height={'75rem'} alt={name} /> </center>
                </div>
                <div className="col-4">
                    <center>
                        <b> {name} </b>
                        <p> $ {parseFloat(price)} </p>
                    </center>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-8">
                            Qty. {qty}
                        </div>
                        <div className="col-4" style={{padding: 0, margin: 0}}>
                            <Button id={id} onClick={(evt) => this.onClose(evt)} style={{borderRadius: '50%'}}>x</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className={'container'}>
                <h4 style={{textAlign: 'center'}}>
                    {(this.props.cart.length > 0)? '' : 'Cart Empty'}
                </h4>
                <div className="container">
                    {this.props.cart.map((item, key) => {
                        return this.renderCartItem(key, item.imageUrl, item.productName, item.price, item.quantity, item.id);
                    })}
                </div>
            </div>
        );
    }
}

export default connect(null, {removeFromCart})(Checkout);