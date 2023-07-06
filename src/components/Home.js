import React from 'react'

const Home = (props) => {
    console.log("Homeprops", props)
     return (
        <div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                     <img src="https://m.media-amazon.com/images/I/8105rYAb-ZL._SX679_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => {
                             props.addToCartHandler({name: "I-Phone", price: '1000'})
                        }}
                    > Add To Cart </button>
                </div>
                 <div className="btn-wrapper item">
                     <button
                         onClick={() => {
                             props.deleteFromCartHandler()
                         }}
                     > Remove from Cart </button>
                 </div>
            </div>
        </div>
     )
}

export default Home;