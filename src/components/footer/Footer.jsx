import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="container container-footer">
        <div className="container-footer-secondary">
          <Link className="logo footer-logo" href="/">
            <Image
              width={194}
              height={74}
              className="logo-img footer-logo-mobile-img"
              src="/images/svg/footer-logo-mobile.svg"
              alt="логотип"
            />
          </Link>
          <div className="footer-info">
            <div className="footer-privacy">
              <h3 className="footer-title privacy-title">PRIVACY</h3>
              <p className="footer-text privacy-text">Privacy Policy</p>
              <p className="footer-text privacy-text">Terms & Conditions</p>
            </div>
            <div className="footer-contacts">
              <h3 className="footer-title contacts-title">Contact us</h3>
              <a
                className="footer-text contacts-link"
                href="mailto:maven.furniture.group@gmail.com"
              >
                maven.furniture.group@gmail.com
              </a>
              <a
                className="footer-text contacts-number"
                href="tel:+380677108100"
              >
                +38-067-710-81-00
              </a>
            </div>
            <div className="subscription">
              <h3 className="footer-title subscription-title">Follow us</h3>
              <div className="footer-socials-links">
                <a className="subscription-link" href="">
                  <Image
                    width="24"
                    height="24"
                    className="subscription-link-instagram"
                    src="/images/svg/icon_instagram.svg"
                    alt="icon_instagram"
                  />
                </a>
                <a className="subscription-link" href="">
                  <Image
                    width="23"
                    height="24"
                    className="subscription-link-tiktok"
                    src="/images/svg/tiktok-icon.svg"
                    alt="tiktok-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="rights-reserved">
          © 2023 MavenGroupFurniture All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
