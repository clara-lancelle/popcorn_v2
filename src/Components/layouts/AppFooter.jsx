import { Link } from "react-router-dom";
import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";

export default function AppFooter({ onCookiesClick }) {
    return (
        <Footer container className="border-gray-200 bg-gray-50 mt-2">
            <div className="w-full">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-1">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <span className="flex mr-4 items-center self-center text-2xl font-semibold whitespace-nowrap ">
                                🍿 PopCorn
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <FooterTitle title="About" />
                                <FooterLinkGroup>
                                    <Link to="/about">About Me </Link>
                                </FooterLinkGroup>
                            </div>
                            <div>
                                <FooterTitle title="Legal" />
                                <FooterLinkGroup col>
                                    <Link to="/legal-notice">Legal Notice</Link>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                    <Link to="/cookies-policy">
                                        Cookies Policy
                                    </Link>
                                </FooterLinkGroup>
                            </div>
                            <div>
                                <FooterTitle title="Action" />
                                <FooterLinkGroup>
                                    <Link
                                        className="hover:cursor-pointer"
                                        onClick={onCookiesClick}
                                    >
                                        Update Cookies Preferences
                                    </Link>
                                </FooterLinkGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <FooterCopyright
                    to="#"
                    by="Lancelle Clara"
                    year={new Date().getFullYear()}
                />
            </div>
        </Footer>
    );
}
