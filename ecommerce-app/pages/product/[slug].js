import Image from "next/image";
import Router, { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/testdata";

export default function ProductDetails() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((pr) => pr.slug === slug);
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2 dark:text-white">
        <div onClick={() => Router.back()}>back to products</div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3 dark:text-white">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
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
            <button className="cartButton w-full">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
