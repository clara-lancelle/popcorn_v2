import { useState, useEffect } from "react";
import { initGA } from "../../Analytics";

export default function CookieBanner({ forceOpen = false }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("analytics_consent");

        if (!consent || forceOpen) {
            setVisible(true);
        }

        if (consent === "accepted" && !forceOpen) {
            initGA();
        }
    }, [forceOpen]);

    const accept = () => {
        localStorage.setItem("analytics_consent", "accepted");
        initGA();
        setVisible(false);
    };

    const refuse = () => {
        localStorage.setItem("analytics_consent", "refused");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 z-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
                <p className="text-sm">
                    This website uses cookies for analytics to improve user
                    experience.
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={refuse}
                        className="px-4 py-2 text-sm bg-gray-700 rounded"
                    >
                        Refuse
                    </button>
                    <button
                        onClick={accept}
                        className="px-4 py-2 text-sm bg-blue-600 rounded"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
