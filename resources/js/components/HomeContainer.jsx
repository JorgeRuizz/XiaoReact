import React from 'react'
import ReactDOM from 'react-dom';
import ProductSlider from './items/ProductSlider'
require('../../css/homeContainer.css');
import productData from '../productData';



const HomeContainer = () => {
  return (
    <div className='container'>
      <ProductSlider products={productData}/>
    </div>
  )
}

export default HomeContainer
if (document.getElementById('HomeContainer')) {
    ReactDOM.render(<HomeContainer />, document.getElementById('HomeContainer'));
}

