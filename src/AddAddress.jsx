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



             </form>
             </div>


        </div>
        )
    }
    
    export default AddAddress