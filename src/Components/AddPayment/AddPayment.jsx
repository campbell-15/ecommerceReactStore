    // AddPayment.jsx

    import React, { useState } from 'react';
    import './AddPayment.css';

    const AddPayment = () => {
    const [cardInfo, setCardInfo] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        saveAsDefault: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setCardInfo({
        ...cardInfo,
        [name]: newValue
        });
    };

    const handleAddPayment = () => {
        // Implement logic to save payment method
        console.log('Saving payment method:', cardInfo);
    };

    return (
        <div className="add-payment-container">
            <div className="select-card-section">
                <h2>SELECT A CARD</h2>
                <div className="existing-cards">
                <label>
                    <input type="radio" name="selectedCard" value="card1" />
                    MasterCard ending in 4242
                </label>
                {/* Add more existing cards here */}
                </div>
            </div>
            <div className="add-new-card-section">
                <h2>ADD A NEW CARD</h2>
                <form>
                <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" name="cardholderName" value={cardInfo.cardholderName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" name="cardNumber" value={cardInfo.cardNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" name="expiryDate" value={cardInfo.expiryDate} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input type="text" name="cvv" value={cardInfo.cvv} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>
                    <input type="checkbox" name="saveAsDefault" checked={cardInfo.saveAsDefault} onChange={handleChange} />
                    Save this as your default payment method
                    </label>
                </div>
                <button type="button" onClick={handleAddPayment}>Add Payment Method</button>
                </form>
            </div>
            </div>
        );
    };

    export default AddPayment;

