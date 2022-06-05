// Providers
import MUIProvider from "./providers/MUIProvider";
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Router, Routes, Route, BrowserRouter } from "react-router-dom"

// Screens
import Home from "./screens/Home";
import InvoiceView from "./screens/InvoiceView";
import Layout from "./components/Layout";
import OrderView from "./screens/OrderView";

const queryClient = new QueryClient()

const App = () => {
  return (


    <QueryClientProvider client={queryClient}>
      <MUIProvider>
        <Layout navbar footer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:user/:index" element={<InvoiceView />} />
              <Route path="/:user" element={<OrderView />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </MUIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

export default App;
