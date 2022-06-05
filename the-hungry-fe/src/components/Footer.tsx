import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <footer>
      <AppBar position="static" sx={{ display: "flex" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CopyrightIcon sx={{ mr: 2 }} />
              <h4>Rui Pereira</h4>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
