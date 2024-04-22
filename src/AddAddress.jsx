import React from 'react';
import './AddAddress.css'
const AddAddress = () => {
   
    return (

        <div className="add-payment-container">
    
        <div className="add-new-card-section">
     
        <form>
            <div className="form-group">
            <label>Shipping name </label>
            <input type="text" name="cardholderName"  placeholder='John Maker'required/>
            </div>
            <div className="form-group">
            <label>Street Name </label>
            <input type="text" name="cardNumber" placeholder='123 Plae Grond Stret' required/>
            </div>
         
            <div className="form-group">
            <label>
                <input type="checkbox" name="saveAsDefault"  />
                Save this as your default Address
            </label>
            </div>
            <button type="button" >Add Address</button>
        </form>
        </div>
    </div>
    )
}

export default AddAddress