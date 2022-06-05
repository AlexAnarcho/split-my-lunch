import { Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Order from '../components/Order';
import { useEffect, useState } from 'react';
import { getNewInvoice } from '../api';

import QrCode from "qrcode"

async function toQrCode(uri: string) {
    const result = await QrCode.toDataURL(uri, { scale: 25 });
    return result
}


function OrderView() {
    const { user } = useParams()
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [index, setIndex] = useState("");
    const [label, setLabel] = useState("");
    const [txUri, setTxUri] = useState("");
    const [payer, setPayer] = useState("thomas");
    const [qrcode, setQrcode] = useState("");


    if (!user) return <Typography>"No user"</Typography>
    const handleClick = () => {

    }


    return (
        <>

            <Order />

            <Button onClick={handleClick}>Create new Order</Button>

        </>
    );
}

export default OrderView;
