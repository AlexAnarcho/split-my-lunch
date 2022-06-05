import { Box, Button, Card, CardActions, CardContent, Chip, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Subaddress from './Subaddress';

interface OrderProps {
    user?: string
    index?: string;
    address?: string;
    balance?: string;
    label?: string;
    isPayed?: boolean;
    qrcode?: string;
    benefactor?: string;
    payer?: string;
}

export default function Order({ user, index, address, balance, label, isPayed, qrcode, benefactor, payer }: OrderProps) {
    const [inputs, setInputs] = useState({
        payer: "",
        amount: ""
    })

    const handleChange = (e: any) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(inputs)
    }

    return (
        <Box sx={{ minWidth: 275, maxWidth: 600 }}>
            <Card variant="outlined">
                <CardContent sx={{ justifyContent: "center" }} >
                    <form onSubmit={handleSubmit}>
                        <Box display="flex" justifyContent="space-around">
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right">
                                From <TextField name="payer" value={inputs.payer} onChange={handleChange} label="Payer" variant="outlined" /> to <Chip label={user} />
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="left">
                                #{index && index}
                            </Typography>

                        </Box>

                        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                            Amount:
                        </Typography>
                        <TextField value={inputs.amount} name="amount" onChange={handleChange} label="Amount" variant="outlined" />

                        <Button type="submit">Submit </Button>
                    </form>
                    {isPayed
                        ?
                        (<Typography variant="h2">Payed</Typography>)
                        :
                        (<>  <Subaddress address={address} />
                            <Box sx={{ display: "flex" }} justifyContent="center" mt={3}>
                                {qrcode ? (<img src={qrcode} width="255" />
                                ) : "Nothing here"}
                            </Box>
                        </>
                        )}

                </CardContent>
                {!isPayed &&
                    (<CardActions sx={{ justifyContent: "center" }}>
                        <Button size="small">Show QR Code</Button>
                    </CardActions>
                    )
                }
            </Card>
        </Box >
    );
}

