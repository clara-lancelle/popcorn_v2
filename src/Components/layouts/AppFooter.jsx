import { Link } from "react-router-dom";
import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";

export default function AppFooter() {
    return (
        <Footer container className="border-gray-200 bg-gray-50 mt-2">
            <div className="w-full">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-1">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 flex flex-row items-center gap-2">
                            <img
                                src="/images/popcorn.png"
                                alt="Popcorn icon"
                                className="w-9 h-9"
                            />
                            <span className="flex mr-4 items-center self-center text-2xl font-semibold whitespace-nowrap ">
                                PopCorn
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6">
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
