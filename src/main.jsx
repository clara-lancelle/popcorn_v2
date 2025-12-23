import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AnalyticsTracker from "./Components/Analytics/AnalyticsTracker";
import CookieBanner from "./Components/Analytics/CookieBanner";

const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AnalyticsTracker />
        <App />
        <CookieBanner />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
