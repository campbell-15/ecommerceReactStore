    // AddPayment.jsx

    import React, { useState } from 'react';
    import './AddPayment.css';
    import CreditCardIcon from '@mui/icons-material/CreditCard';

    const AddPayment = () => {
        const [cardInfo, setCardInfo] = useState({
            cardholderName: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            saveAsDefault: false
            });
        
            const [existingCards, setExistingCards] = useState([]);
        
            const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            const newValue = type === 'checkbox' ? checked : value;
            setCardInfo({
                ...cardInfo,
                [name]: newValue
            });
            };
        
            const handleAddPayment = () => {
            // Create a new card object with the entered information
            const newCard = {
                cardNumber: cardInfo.cardNumber,
                cardholderName: cardInfo.cardholderName,
                expiryDate: cardInfo.expiryDate,
                cvv: cardInfo.cvv,
                saveAsDefault: cardInfo.saveAsDefault
            };
        
            // Add the new card to the existing cards list
            setExistingCards([...existingCards, newCard]);
        
            // Reset the form fields after adding the new card
            setCardInfo({
                cardholderName: '',
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                saveAsDefault: false
            });
            };
        
            return (
            <div className="add-payment-container">
                <div className="select-card-section">
                <h2>SELECT A CARD</h2>
                <div className="existing-cards">
                    {existingCards.map((card, index) => (
                        <div key={index} className="card-item">
                        <CreditCardIcon />
                        <span>
                            MasterCard ending in {card.cardNumber.slice(-4)}
                        </span>
                        </div>
                    ))}
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

