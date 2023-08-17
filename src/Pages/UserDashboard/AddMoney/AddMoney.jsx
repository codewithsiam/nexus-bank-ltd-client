import React, { useState } from 'react';
import { Button, Card, CardContent, TextField, Typography, Container } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

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
        <Container maxWidth="sm">
            <Card variant="outlined" sx={{ marginTop: 5, padding: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Make a Payment
                    </Typography>
                    <form>
                        <TextField
                            label="Card Number"
                            variant="outlined"
                            fullWidth
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            sx={{ marginTop: 2 }}
                        />
                        <TextField
                            label="Expiry Date"
                            variant="outlined"
                            fullWidth
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="MM/YY"
                            sx={{ marginTop: 2 }}
                        />
                        <TextField
                            label="CVV"
                            variant="outlined"
                            fullWidth
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            sx={{ marginTop: 2 }}
                        />
                        <TextField
                            label="Name on Card"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            sx={{ marginTop: 2 }}
                        />
                        <Button
                            variant="contained"
                            endIcon={<PaymentIcon />}
                            onClick={handlePayment}
                            sx={{ marginTop: 3 }}
                        >
                            Submit Payment
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Payment;
