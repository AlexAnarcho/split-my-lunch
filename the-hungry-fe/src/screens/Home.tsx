import axios from "axios";
import { Container, Button, Box } from "@mui/material";
import QrCode from "qrcode"

// Components
import Layout from "../components/Layout";


const getNewInvoice = async () => {
  const user = "alex"
  return await axios.post(`http://127.0.0.1:4000/monero/create/${user}`, { user, label: "test" })
}

async function toQrCode(uri: string) {
  const result = await QrCode.toDataURL(uri, { scale: 25 });
  return result
}

const Home = () => {

  const handleClick = () => {
    /* (async () => {
*   const { status, data } = await getNewInvoice()
*   setAddress(data.address)
*   setIndex(data.index)
*   setLabel(data.label)
*   setTxUri(data.txUri)

*   const qr = await toQrCode(data.txUri)
*   setQrcode(qr)

*   console.log("data: ", data)
* })() */
  }

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>

      <Box sx={{ display: "flex" }} mt={3} justifyContent="center">
        <Button onClick={handleClick} variant="contained">Get new subaddress</Button>
      </Box>
    </Container>
  );
};

export default Home;
