import axios from "axios";
import { useEffect, useState } from "react";
import Invoice from "../components/Invoice"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query";


const getBalance = async ({ queryKey }: any) => {
    const [_, addr] = queryKey
    const { user, index } = addr
    const { data } = await axios.get(`http://127.0.0.1:4000/monero/status/${user}/${index}`)
    return data
}

function InvoiceView() {
    const { user, index } = useParams()
    const { status, data, error } = useQuery(["balance", { user, index }], getBalance)
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("0");
    const [label, setLabel] = useState("");
    const [qrcode, setQrcode] = useState("")
    const [isPayed, setIsPayed] = useState(false)

    useEffect(() => {
        if (data === undefined) return
        const { address, label, isUsed, balance } = data
        setBalance(balance)
        setAddress(address)
        setIsPayed(isUsed)
        setLabel(label)
    }, [data])

    if (status === 'loading') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <>Error: {error}</>
    }


    return (
        <Invoice index={index} address={address} balance={balance} label={label} isPayed={isPayed} qrcode={qrcode} benefactor={"alex"} payer={"mathias"} />
    );
}

export default InvoiceView;
