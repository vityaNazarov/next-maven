import Link from "next/link";

function MobileMenu({ active, setActive }) {
  return (
    <div
      className={active ? "mobile-menu active" : "mobile-menu"}
      onClick={() => setActive(false)}
    >
      <div className="backdrop"></div>
      <div className="mobile-section">
        <ul className="mobile-section-list list">
          <li className="mobile-section-item mobile-section-item-about">
            <div className="mobile-section-item-about-chevron">
              Про нас
              <svg
                className="mobile-menu-chevron"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5129 23.5384L11.4258 22.4513L17.8976 15.9795L11.4258 9.49485L12.5129 8.40771L20.0719 15.9795L12.5129 23.5384Z"
                  fill="#232427"
                />
              </svg>
            </div>

            <ul className="mobile-section-list-secondary list">
              <li className="mobile-section-item-secondary">
                <Link href="/about-us">Про компанію</Link>
              </li>
              <li className="mobile-section-item-secondary">
                <Link href="/career">Кар’єра</Link>
              </li>
            </ul>
          </li>
          <li className="mobile-section-item">
            <Link href="/projects">Проєкти</Link>
          </li>
          <li className="mobile-section-item">
            <Link href="/catalog">Каталог</Link>
          </li>
          <li className="mobile-section-item">
            <Link href="/individual-projects">Індивідуальні проекти</Link>
          </li>
          <li className="mobile-section-item">
            <Link href="/business">В2В</Link>
          </li>
          <li className="mobile-section-item">
            <Link href="/contacts">Контакти</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
