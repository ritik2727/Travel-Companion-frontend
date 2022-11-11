import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { couponApply } from '../actions/cartActions'
import Message from './Message'
import Loader from './Loader'
import { couponApply } from './apiCore'
import { StateContext } from '../context/StateContext'
// import Colors from './Colors'

const ApplyCoupon = () => {
  const [applyCoupon, setApplyCoupon] = useState('');
  // const [dis, setdis] = useState(0);
  const { ds,t } = useContext(StateContext);
  const [dis,setdis] = ds;
  const [couponAppield,setCouponAppield] =t;
  // const dispatch = useDispatch()
  const applyCouponHandler = (e) => {
    e.preventDefault()
    couponApply(applyCoupon).then((data) => {
      if (data.error) {
        console.log("EORRR",data.error);
      } else {
        console.log("dqqw", data);
        setdis(data);
        setCouponAppield(true);
      }
    });

  }
  return (
    <>
      <Form onSubmit={applyCouponHandler} className='my-5'>
        <Form.Group controlId='name'>
          <Form.Label>Coupon</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Coupon'
            value={applyCoupon}
            onChange={(e) => setApplyCoupon(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type='submit'
          variant='primary'
          className='my-3'
          // disabled={loadingApplyCoupon}
        >
          Apply Coupon
          {/* {loadingApplyCoupon && <Loader size='size-sm' />} */}
        </Button>
      </Form>
    </>
  )
}

export default ApplyCoupon
