import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import {editCart} from "../utils/mainReducer";

export default function PaymentScreen() {
  const [selectedPayment, setSelectedPayment] = useState('');
  const {cart} = useSelector((state) => state.main)
  const dispatch = useDispatch()
  const {shippingAddress, paymentMethod} = cart

  const router = useRouter();

  const submit = (e) => {
    e.preventDefault()
    if(!selectedPayment){
      return toast.error('Payment method is required')
    }
    dispatch(editCart({type: 'SAVE_PAYMENT_METHOD', payload: selectedPayment}))
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPayment
      })
    )
    router.push('/placeorder')
  }

  useEffect(() => {
    if(!shippingAddress.address){
      return router.push('/shipping')
    }
    setSelectedPayment(paymentMethod || '')
  },[paymentMethod, router, shippingAddress.address])

  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form className="mx-auto max-w-screen-md" onSubmit={submit}>
        <h1 className="mb-4 text-xl">Payment Method</h1>
        {["PayPal", "Stripe", "CashOnDelivery"].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              type="radio"
              checked={selectedPayment === payment}
              onChange={() => setSelectedPayment(payment)}
            />
            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            className="defaultButton"
            onClick={() => router.push("/shipping")}
            type="button"
          >
            Back
          </button>
          <button
            className="cartButton"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
}

PaymentScreen.auth = true