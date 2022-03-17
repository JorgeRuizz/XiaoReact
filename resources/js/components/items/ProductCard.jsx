import React from 'react'
import RatingStars from './RatingStars';
import { FaShoppingCart} from 'react-icons/fa';

const ProductCard = ({product}) => {
    console.log(product);
  return (

    <div className='productCard'>
      <div className="productImage">
          <img src={"/images/products/"+product.imageSrc} alt="" srcset="" />
      </div>
      <div className="productData">
          <span>{product.name}</span>
          <h1 style={{color:'var(--dark-grey)'}}>${product.price}</h1>
          <RatingStars star={product.stars} ratings={product.reviews}/>
      </div>
      <div className="bottomButton">
        <div className="buttons">
          <h4 style={{transform:'translateX(15px)',color:'var(--dark-grey)'}}><FaShoppingCart style={{fontSize:'var(--fs-500)', position:'absolute',transform:'translateX(-30px)'}}/> Preview</h4>
        </div>
        
      </div>
    </div>
  )
}

export default ProductCard
