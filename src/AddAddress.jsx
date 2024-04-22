import React from 'react';
import './AddAddress.css'
// import { green } from '@mui/material/colors';
import greenbag from './Assets/greenlock.png'

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
                    <label  className='Label' >Country</label>
                    <div className="InputArea">
                    <input  className='Placeholder'  type="text" name="cardholderName"  placeholder='United States of America' required/>
                    </div>
            </div>

            <div className="form-group">
            <label className='Placeholder' >
                <input className='styled-checkbox' type="checkbox" name="saveAsDefault"  />
                Save this as your default Address
            </label>
            </div>
            

             </form>
             </div>


        </div>
        )
    }
    
    export default AddAddress