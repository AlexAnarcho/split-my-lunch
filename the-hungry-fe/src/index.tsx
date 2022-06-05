import ReactDOM from "react-dom/client";
import App from "./App";

import "./scss/styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
