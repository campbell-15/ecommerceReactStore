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
        
            const [existingCards, setExistingCards] = useState([
                // Placeholder cards
                {
                    cardholderName: 'John Doe',
                    cardNumber: '**** **** **** 1234', 
                    expiryDate: '12/25',
                    cvv: '123',
                    saveAsDefault: false
                },
                {
                    cardholderName: 'Jane Smith',
                    cardNumber: '**** **** **** 5678',
                    expiryDate: '10/23',
                    cvv: '456',
                    saveAsDefault: false
                }
            ]);
        
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
                    <input type="text" name="cardholderName" value={cardInfo.cardholderName} onChange={handleChange} placeholder='John Maker'required/>
                    </div>
                    <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" name="cardNumber" value={cardInfo.cardNumber} onChange={handleChange} placeholder='Enter Card Number...' required/>
                    </div>
                    <div className="form-group">
                        <div className="horizontal-group">
                            <div className="expiry-date">
                                <label>Expiry Date</label>
                                <input type="text" name="expiryDate" value={cardInfo.expiryDate} onChange={handleChange} placeholder='31/2030' required/>
                            </div>
                            <div className="cvv">
                                <label>CVV</label>
                                <input type="text" name="cvv" value={cardInfo.cvv} onChange={handleChange} placeholder='123' required/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                    <label>
                        <input type="checkbox" name="saveAsDefault" checked={cardInfo.saveAsDefault} onChange={handleChange} />
                        Save this as your default payment method
                    </label>
                    </div>
                    <button type="button" onClick={handleAddPayment} disabled={!cardInfo.cardholderName || !cardInfo.cardNumber || !cardInfo.expiryDate || !cardInfo.cvv} className='add-payment-btn'>Add Payment Method</button>
                    <div className="bottom-card">
                        <div className="back-button">
                            <button>Back</button>
                        </div>
                        <div className="secure-connection">
                            <h6>Secure Connection</h6>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            );
        };
        
        export default AddPayment;

