import React, { useState } from 'react';

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');

    const handlePayment = () => {
        // Here you can implement your payment processing logic
        // For the sake of this example, let's just simulate a successful payment
        alert('Payment successful!');
    };

    return (
        <div>
            <h2>Make a Payment</h2>
            <form>
                <div>
                    <label>Card Number:</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                    />
                </div>
                <div>
                    <label>Expiry Date:</label>
                    <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="MM/YY"
                    />
                </div>
                <div>
                    <label>CVV:</label>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                    />
                </div>
                <div>
                    <label>Name on Card:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                    />
                </div>
                <button type="button" onClick={handlePayment}>Submit Payment</button>
            </form>
        </div>
    );
};

export default Payment;
