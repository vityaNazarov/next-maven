"use client";

import styles from "./DrippingScrollArrow.module.css";

function DrippingScrollArrow() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.chevrons}>
        <div className={styles.chevron}>
          <span className={styles.chevronShape} />
        </div>
        <div className={styles.chevron}>
          <span className={styles.chevronShape} />
        </div>
        <div className={styles.chevron}>
          <span className={styles.chevronShape} />
        </div>
      </div>
      <span className={styles.label}>Scroll</span>
    </div>
  );
}

export default DrippingScrollArrow;
