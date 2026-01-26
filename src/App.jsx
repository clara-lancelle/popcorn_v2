import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HandleFavoritePage from "./Components/HandleFavoritePage";
import AppNavbar from "./Components/layouts/AppNavbar";
import HandleMovieDetails from "./Components/HandleMovieDetails";
import HandleRatedPage from "./Components/HandleRatedPage";
import HandleMovieGallery from "./Components/HandleMovieGallery";
import LegalNotice from "./Components/pages/LegalNotice";
import PrivacyPolicy from "./Components/pages/PrivacyPolicy";
import AppFooter from "./Components/layouts/AppFooter";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";

function App() {
    const [currentMovie, setCurrentMovie] = useState({});
    return (
        <div className="min-h-screen flex flex-col">
            <AppNavbar />
            <div className="flex-1 content-center">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HandleMovieGallery
                                setCurrentMovie={setCurrentMovie}
                                currentMovie={currentMovie}
                            />
                        }
                    />
                    <Route path="/fav" element={<HandleFavoritePage />} />
                    <Route path="/rated" element={<HandleRatedPage />} />
                    <Route path="/details" element={<HandleMovieDetails />} />
                    <Route path="/legal-notice" element={<LegalNotice />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/about" element={<About />} />
                    {/* 404 — ALWAYS LAST */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <AppFooter />
        </div>
    );
}

export default App;
