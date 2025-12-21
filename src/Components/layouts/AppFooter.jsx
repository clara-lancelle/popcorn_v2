import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";

export default function AppFooter({ onCookiesClick }) {
    return (
        <Footer container className="border-gray-200 bg-gray-50">
            <div className="w-full">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-2">
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
                                    <FooterLink href="/about">
                                        About Me{" "}
                                    </FooterLink>
                                </FooterLinkGroup>
                            </div>
                            <div>
                                <FooterTitle title="Legal" />
                                <FooterLinkGroup col>
                                    <FooterLink href="/legal-notice">
                                        Legal Notice
                                    </FooterLink>
                                    <FooterLink href="/privacy-policy">
                                        Privacy Policy
                                    </FooterLink>
                                    <FooterLink href="/cookies-policy">
                                        Cookies Policy
                                    </FooterLink>
                                </FooterLinkGroup>
                            </div>
                            <div>
                                <FooterTitle title="Action" />
                                <FooterLinkGroup>
                                    <FooterLink
                                        className="hover:cursor-pointer"
                                        onClick={onCookiesClick}
                                    >
                                        Update Cookies Preferences
                                    </FooterLink>
                                </FooterLinkGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <FooterCopyright
                    href="#"
                    by="Lancelle Clara"
                    year={new Date().getFullYear()}
                />
            </div>
        </Footer>
    );
}
