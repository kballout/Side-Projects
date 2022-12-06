/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Item({product}) {
  return (
    <div className='card dark:text-white border-2 dark:border-white'>
        <Link href={`product/${product.slug}`}>
            <img
                src={product.image}
                alt={product.name}
            />
        </Link>

        <div className='flex flex-col justify-center items-center p-5'>
            <Link href={`product/${product.slug}`}>
                <h2 className='text-lg'>{product.name}</h2>
            </Link>
            <p className='mb-2'>{product.brand}</p>
            <p>${product.price}</p>
        </div>
    </div>
  )
}
