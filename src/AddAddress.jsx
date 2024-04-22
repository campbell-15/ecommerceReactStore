import React from 'react';
import './AddAddress.css'
const AddAddress = () => {
   
    return (

        <div className="add-address-container">
    
        <div className="add-new-card-section">
     
        <form>

            <div className="form-group">
                   <label className='Label'>Shipping Name </label>
                    <div className="InputArea">
                    <input  className='Placeholder'  type="text" name="cardholderName"  placeholder='John Maker'required/>
                    </div>
            </div>

            <div className="form-group">
                    <label  className='Label' >Street Name</label>
                    <div className="InputArea">
                    <input  className='Placeholder'  type="text" name="cardholderName"  placeholder='123 Plae Grond Stret' required/>
                    </div>
            </div>
           
            <div className="form-group">
                    <label  className='Label' >City</label>
                    <div className="InputArea">
                    <input  className='Placeholder'  type="text" name="cardholderName"  placeholder='Vermont' required/>
                    </div>
            </div>

            <div className="form-group">
                    <label  className='Label' >State / Province</label>
                    <div className="InputArea">
                    <input  className='Placeholder'  type="text" name="cardholderName"  placeholder='California' required/>
                    </div>
            </div>


            <div className="form-group">
                    <label  className='Label' >State / Province</label>
                    <div className="InputArea">
                    <input  className='Placeholder'  type="text" name="cardholderName"  placeholder='California' required/>
                    </div>
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