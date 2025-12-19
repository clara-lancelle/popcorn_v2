import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function AppFooter() {
  return (
    <Footer container>
      <FooterCopyright
        href="#"
        by="Lancelle Clara"
        year={new Date().getFullYear()}
      />
      <FooterLinkGroup>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/legal-notice">Legal Notice</FooterLink>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/cookies-policy">Cookies Policy</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
