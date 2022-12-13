import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import { editCart } from "../utils/mainReducer";

export default function ShippingScreen() {
  const dispatch = useDispatch();
  const router = useRouter()
  const { cart } = useSelector((state) => state.main);
  const { shippingAddress } = cart;

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("state", shippingAddress.state);
  }, [setValue, shippingAddress]);

  const submit = ({ fullName, address, city, postalCode, state }) => {
    dispatch(
      editCart({
        type: "SAVE_SHIPPING_ADDRESS",
        payload: { fullName, address, city, postalCode, state },
      })
    );
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          state,
        },
      })
    );
    router.push('/payment')
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit(submit)} className="mx-auto max-w-screen-md">
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Please enter your full name",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            autoFocus
            {...register("address", {
              required: "Please enter your address",
              minLength: {
                value: 3,
                message: "Address must be more than 2 characters",
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            autoFocus
            {...register("city", {
              required: "Please enter your city",
            })}
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full"
            id="postalCode"
            autoFocus
            {...register("postalCode", {
              required: "Please enter your postal code",
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="state">State</label>
          <input
            className="w-full"
            id="state"
            autoFocus
            {...register("state", {
              required: "Please enter your State",
            })}
          />
          {errors.state && (
            <div className="text-red-500">{errors.state.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="cartButton">Next</button>
        </div>
      </form>
    </Layout>
  );
}

ShippingScreen.auth = true;
