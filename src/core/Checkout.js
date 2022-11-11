import React, { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
// import "braintree-web"; // not using this package
import DropIn from 'braintree-web-drop-in-react';
import Colors from './Colors';
import ApplyCoupon from './ApplyCoupon';
import { Button, Col, Row, ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { StateContext } from '../context/StateContext';

const Checkout = ({ products, setRun = f => f, run = undefined }) => {

    const { ds,t } = useContext(StateContext);
    const [dis,setdis] = ds;
    const [couponAppield,setCouponAppield] =t;

    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    });

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
                setData({ ...data, error: data.error });
            } else {
                console.log(data);
                setData({ clientToken: data.clientToken });
            }
        });
    };

    useEffect(() => {
        getToken(userId, token);
        // eslint-disable-next-line
    }, []);

    const handleAddress = event => {
        setData({ ...data, address: event.target.value });
    };

    const getTotal = () => {
     const amt = products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
        const disamt = ( amt-(amt*dis)/100);

        return couponAppield ? disamt : amt
    };

    const showCheckout = () => {
        return isAuthenticated() ? (
            <div>{showDropIn()}</div>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary p-2 by-2">Sign in to checkout</button>
            </Link>
        );
    };

    let deliveryAddress = data.address;

    const buy = () => {
        setData({ loading: true });
        // send the nonce to your server
        // nonce = data.instance.requestPaymentMethod()
        let nonce;
        let getNonce = data.instance.requestPaymentMethod()
            .then(data => {
                // console.log(data);
                nonce = data.nonce;
                // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
                // and also total to be charged
                // console.log(
                //     "send nonce and total to process: ",
                //     nonce,
                //     getTotal(products)
                // );
                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: getTotal(products)
                };

                processPayment(userId, token, paymentData)
                    .then(response => {
                        console.log(response);
                        // empty cart
                        // create order

                        const createOrderData = {
                            products: products,
                            transaction_id: response.transaction.id,
                            amount: response.transaction.amount,
                            address: deliveryAddress
                        };

                        createOrder(userId, token, createOrderData)
                            .then(response => {
                                emptyCart(() => {
                                    setRun(!run); // run useEffect in parent Cart
                                    console.log('payment success and empty cart');
                                    setCouponAppield(false);
                                    setdis(0);
                                    setData({
                                        loading: false,
                                        success: true
                                    });
                                });
                            })
                            .catch(error => {
                                console.log(error);
                                setData({ loading: false });
                            });
                    })
                    .catch(error => {
                        console.log(error);
                        setData({ loading: false });
                    });
            })
            .catch(error => {
                // console.log("dropin error: ", error);
                setData({ ...data, error: error.message });
            });
    };

    const showDropIn = () => (
        <div onBlur={() => setData({ ...data, error: '' })}>
            {data.clientToken !== null && products.length > 0 ? (
                <div>
                    <div className="gorm-group mb-3">
                        <label className="text" style={{color:Colors.SubWhite}}>Delivery address:</label>
                        <textarea
                            onChange={handleAddress}
                            className="form-control"
                            value={data.address}
                            placeholder="Type your delivery address here..."
                        />
                    </div>

                    <DropIn
                    
                        options={{
                            authorization: data.clientToken,
                            paypal: {
                                flow: 'vault'
                            }
                        }}
                        onInstance={instance => (data.instance = instance)}
                    />
                    <button onClick={buy} className="btn btn-success btn-block">
                        Pay
                    </button>
                </div>
            ) : null}
        </div>
    );

    const showError = error => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = success => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Thanks! Your payment was successful!
        </div> 
    );

    const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;

    return (
        <div>
            <h4 className="p-2 my-2 text-info font-weight-bold">Total: ₹{getTotal()}</h4>
            {couponAppield && (
                <ListGroup.Item style={{ backgroundColor: "#273c75" }}>
                  <Row className="d-flex align-items-center">
                    <Col md={8}>
                      <span style={{ color: "#fff" }}>
                        Discount Applied: Total Payable: ₹{getTotal()}
                      </span>
                    </Col>
                    <Col md={4}>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={()=>{
                            setCouponAppield(false);
                            setdis(0);
                        }}
                        // onClick={cancelCouponHandler}
                        // disabled={loadingCancelCoupon}
                      >
                        Cancel Coupon
                     
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <Col
                style={{
                  backgroundColor: "rgb(34 43 69)",
                //   borderColor: Colors.SubWhite,
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                  boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                  color: Colors.white,
                }}
              >
                <ApplyCoupon
        
                />
              </Col>
            {showLoading(data.loading)}
            {showSuccess(data.success)}
            {showError(data.error)}
            {showCheckout()}
        </div>
    );
};

export default Checkout;
