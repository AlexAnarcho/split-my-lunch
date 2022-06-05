import { Avatar, Box, Button, Card, CardActions, CardContent, Chip, Grid, Typography } from "@mui/material";
import Subaddress from "./Subaddress"

interface InvoiceProps {
    index?: string;
    address: string;
    balance: string;
    label: string;
    isPayed?: boolean;
    qrcode: string;
    benefactor: string;
    payer: string;
}

export default function Invoice({ index, address, balance, label, isPayed, qrcode, benefactor, payer }: InvoiceProps) {
    return (
        <Box sx={{ minWidth: 275, maxWidth: 600 }}>
            <Card variant="outlined">
                <CardContent sx={{ justifyContent: "center" }} >
                    <Box display="flex" justifyContent="space-around">
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right">
                            From <Chip label={payer} /> to <Chip label={benefactor} />
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="left">
                            #{index && index}
                        </Typography>
                    </Box>


                    <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
                        Balance: {balance}
                        {label}
                    </Typography>

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
