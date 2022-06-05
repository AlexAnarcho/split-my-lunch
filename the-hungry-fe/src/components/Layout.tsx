import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = PropsWithChildren<{
  navbar?: boolean;
  footer?: boolean;
}>;

const Layout = ({ children, navbar, footer }: Props) => {
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {navbar && <Navbar />}
        <Box
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          {children}
        </Box>
        {footer && <Footer />}
      </Box>
    </main>
  );
};

export default Layout;
