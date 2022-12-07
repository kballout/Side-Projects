import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { BsXCircle } from "react-icons/bs";
import { editCart } from "../utils/mainReducer";
import { useRouter } from "next/router";

export default function CartScreen() {
  const { cart } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const router = useRouter()

  const removeCartItem = (item) => {
    dispatch(editCart({ type: "REMOVE_FROM_CART", payload: item }));
  };

  return (
    <Layout title={"shopping Cart"}>
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
        <div>
          Cart is empty.
          <Link href={"/"}>Shop</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="px-5 text-right">Quantity</th>
                  <th className="px-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}></Link>
                      <a className="flex items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        &nbsp;
                        {item.name}
                      </a>
                    </td>
                    <td className="p-5 text-right">{item.quantity}</td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeCartItem(item)}>
                        <BsXCircle size={25} className="cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5 ">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal (
                  {cart.cartItems.reduce((a, item) => a + item.quantity, 0)}):
                  $
                  {cart.cartItems.reduce(
                    (a, item) => a + item.quantity * item.price,
                    0
                  )}
                </div>
              </li>
              <li>
                <button onClick={() => router.push('/shipping')} className="w-full cartButton">Check Out</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
