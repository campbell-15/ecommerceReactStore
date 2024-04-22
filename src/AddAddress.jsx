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




             </form>
             </div>


        </div>
        )
    }
    
    export default AddAddress