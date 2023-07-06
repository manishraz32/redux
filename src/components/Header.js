import React from 'react'

function Header({cardData}) {
   // console.log("headerPropsData", props)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{cardData && cardData.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header