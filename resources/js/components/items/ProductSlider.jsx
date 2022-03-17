import React from 'react'
import ProductCard from './ProductCard'

const ProductSlider = ({products}) => {
    console.log(products.length);
  return (
    <div className='sliderContainer'>
       {products.map((product)=>{
           
           console.log(product);
           return <ProductCard key={product.id} product={product}/>
       })}
    </div>
  )
}
export default ProductSlider
