import Image from "next/image";
import Router, { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { editCart } from "../../utils/mainReducer";
import data from "../../utils/testdata";

export default function ProductDetails() {
  const {cart} = useSelector((state) => state.main)
  const dispatch = useDispatch()
  const router = useRouter()
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((pr) => pr.slug === slug);
  
  if (!product) {
    return <div>Product not found!</div>;
  }

  const addToCart = () => {
    const exists = cart.cartItems.find((item) => item.slug === product.slug);
    const quantity = exists ? exists.quantity + 1: 1
    if(product.stock < quantity){
      alert('The product is out of stock')
      return
    }
    dispatch(editCart({type: 'ADD_TO_CART', payload: {...product, quantity}}))
    router.push('/cart')
  }

  return (
    <Layout title={product.name}>
      <div className="py-2 dark:text-white">
        <div onClick={() => Router.back()}>back to products</div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3 dark:text-white">
        <div className="mb-10 md:col-span-2" style={{width: '400', height: '400'}}>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-3xl">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.reviews} reviews
            </li>
            <li>Description: {product.description} </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.stock > 0 ? "In Stock" : "Unavailable"}</div>
            </div>
            <button onClick={() => addToCart()} className="cartButton w-full">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
