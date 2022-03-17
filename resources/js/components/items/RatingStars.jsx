import React from 'react'

   

const RatingStars = ({star, ratings}) => {
const starPercentage = (star / 5) * 100;
const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  return (
    <div data-rating={star} className='stars'>
        <div className="stars-outer">
        <div style={{width:starPercentageRounded}} className="stars-inner"></div>
        </div>
        <span className="number-rating"></span>
        <small style={{display:'inline-block',marginLeft:'10px',color:'var(--text-light)' }}>{ratings} RATINGS</small>
    </div>
  )
}
RatingStars.defaultProps={
    star:4.5,
    ratings:10,
}

export default RatingStars
