import React, { Component } from 'react';
import {
    Button, Popover, PopoverHeader, PopoverBody, Modal,
    ModalHeader, ModalBody, ModalFooter, Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import Ionicon from 'react-ionicons';
import ProductCard from '../components/ProductCard';
import Checkout from '../components/Checkout';
import { emptyCart } from '../redux/actions';
import './App.css';

const subtotal = (cart) => {
    let subTotal = 0;
    if(cart.length) {
        cart.forEach((item) => {
            subTotal += item.quantity * item.price;
        });
    }
    return subTotal.toFixed(2);
};

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
            modal: false,
            alert: false,
            resetCounterVal: null
        };
    }

    onDismiss() {
        this.setState({ alert: false });
    }

    renderAlert() {
        if(this.state.alert) {
            return (
                <Alert color="success" isOpen={this.state.alert} toggle={() => this.onDismiss()}>
                    Your order has been placed!
                </Alert>
            );
        } else {
            return (
                <div />
            );
        }
    }

    toggleM() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggle() {
        console.log('this.state', this.state);
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    renderRow(item) {
        const returnVal = [];

        for(let i = 0; i < item.length; i++) {
            returnVal.push(
                <div key={item[i].id} className="col-sm col-xs-12">
                    <ProductCard
                        id={item[i].id}
                        imageURL={item[i].imageUrl}
                        name={item[i].productName}
                        price={item[i].price}
                        quantityAvailable={item[i].quantityAvailable}
                        cart={this.props.Cart}
                        data={this.props.APIData}
                        reset={this.state.resetCounterVal}
                    />
                </div>
            );
        }

        return returnVal;
    }

    renderProducts(data) {
        const returnComponent = [];
        const iterations = Math.ceil(data.length / 3);

        let j = 0;

        for(let i = 0; i < iterations; i++) {
            returnComponent.push(<div className="row" key={i}> {this.renderRow(data.slice(j, j+3))} </div>);
            j += 3;
        }

        return returnComponent;
    }

    order(cart) {
        fetch('/sms', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: `$ ${(parseFloat(subtotal(cart)) + subtotal(cart)*.05).toFixed(2)}`,
                secondParam: 'yourOtherValue',
            })
        })
        .then((val) => {
            try {
                console.log("ORDER SUCCESS!!!", val);
                this.props.emptyCart();

                this.setState({
                    alert: true
                });

                this.setState({
                    resetCounterVal: true
                });

                setTimeout(() => {
                    this.setState({
                        resetCounterVal: false
                    });
                }, 500);
            }
            catch (e) {
                console.log('e', e);
            }})
        .catch(() => {
            console.log("ORDER FAILED PLEASE TRY AGAIN...");
            alert('OOPS!');
        });
    }

  render() {
    return (
      <div className="App">
          <br/>
          <Button block size={'lg'} id="fixedButton" color='danger' onClick={() => this.toggleM()}>
              Cart
              <Ionicon icon="ios-cart" fontSize="35px" color="#FFF"/>
              <sub>{`${this.props.Cart.length}`}</sub>
          </Button>

          <br/>

          <Modal isOpen={this.state.modal} toggle={() => this.toggleM()} className={this.props.className}>
              <ModalHeader toggle={() => this.toggleM()}>
                  Cart
              </ModalHeader>
              <ModalBody>
                  {this.renderAlert()}
                  <Checkout cart={this.props.Cart} />
                  {(this.props.Cart.length > 0)? (
                      <div style={{border: '1px solid #ddd', width:'60%', float: 'right', marginRight: '1rem'}} className={'container'}>
                          <p style={{textAlign: 'right', fontSize: '1.1rem'}}>
                              Subtotal: <b> $ {subtotal(this.props.Cart)} </b>
                          </p>
                          <p style={{textAlign: 'right', fontSize: '1.1rem'}}>
                              Service Fee: <b> $ {(subtotal(this.props.Cart)*.05).toFixed(2)} </b>
                          </p>
                          <p style={{textAlign: 'right', fontSize: '1.1rem'}}>
                              Total: <b> $ {(parseFloat(subtotal(this.props.Cart)) + subtotal(this.props.Cart)*.05).toFixed(2)} </b>
                          </p>
                      </div>
                  ) : ''}
              </ModalBody>
              <ModalFooter>
                  <Button color="success" disabled={this.props.Cart.length === 0} onClick={() => this.order(this.props.Cart)}>
                      Order
                  </Button>{' '}
                  <Button color="secondary" disabled={this.props.Cart.length === 0}
                      onClick={() => {this.props.emptyCart(); this.toggleM()}}>
                      Empty Cart
                  </Button>
              </ModalFooter>
          </Modal>

          <Popover placement="bottom" isOpen={this.state.popoverOpen} target="fixedButton" toggle={this.toggle}>
              <PopoverHeader>
                  <strong style={{textAlign: 'center'}}> Cart </strong>
                  <Button outline size="sm" onClick={() => this.order(this.props.Cart)}> ORDER </Button>
                  <Button outline size="sm" onClick={this.toggle} style={{float: 'right'}}>x</Button>
                  <br/><br/>
              </PopoverHeader>
              <PopoverBody>
                  <Checkout cart={this.props.Cart} />
                  {(this.props.Cart.length > 0)? (
                      <div style={{border: '1px solid #ddd', width:'60%', float: 'right', marginRight: '1rem'}} className={'container'}>
                          <p style={{textAlign: 'right', fontSize: '1.1rem'}}>
                              Subtotal: <b> $ {subtotal(this.props.Cart)} </b>
                          </p>
                          <p style={{textAlign: 'right', fontSize: '1.1rem'}}>
                              Service Fee: <b> $ {(subtotal(this.props.Cart)*.05).toFixed(2)} </b>
                          </p>
                          <p style={{textAlign: 'right', fontSize: '1.1rem'}}>
                              Total: <b> $ {(parseFloat(subtotal(this.props.Cart)) + subtotal(this.props.Cart)*.05).toFixed(2)} </b>
                          </p>
                      </div>
                  ) : ''}
              </PopoverBody>
          </Popover>

          <div className="container">
              {this.renderProducts(this.props.APIData)}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log('cart', state.cart);
    return { Cart: state.cart, APIData: state.products };
};

export default connect(mapStateToProps, {emptyCart})(App);
