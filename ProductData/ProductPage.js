import React from "react";

function ProductPage () {
    const productDetails = {
        name: "Apple Watch",
        price: "$529.99",
        description: "Apple Watch can do what your other devices can’t because it’s on your wrist. When you wear it, you get a fitness partner that measures all the ways you move, meaningful health insights, innovative safety features, and a connection to the people you care about most.",
        image: "apple-watch.png"
    };

    return(
        <div>
            <h1>{productDetails.name}</h1>
            <p>{productDetails.price}</p>
            <p>{productDetails.description}</p>
            <img src={productDetails.image}/>
        </div>
    );
}

export default ProductPage;