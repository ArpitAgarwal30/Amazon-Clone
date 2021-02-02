import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
// import FlipMove from 'react-flip-move';

function CheckoutProduct({id,image,title,price,rating,}) {
   const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
    //    Removes the item from the basket
       dispatch({
           type: "Remove From Basket",
           id:id,
       })
    }
    return (
        <div className = "checkoutProduct">
            <img alt = " "  className = "checkoutProduct__image" src = {image}></img>
            <div className = "checkoutProduct__info">
                <p className = "checkoutProduct__title">{title}</p>
                <p className = "checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className = "checkoutProduct__rating">
                  {Array(rating)
                   .fill()
                   .map((_, i)=>(
                    <p><StarIcon/></p>
                   ))}
                </div>
                <button className = "checkoutProduct__button" onClick = {removeFromBasket}>Remove from Basket</button>
            </div>
        </div> 
    )
}

export default CheckoutProduct;
