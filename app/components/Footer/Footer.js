"use client";

import { Suspense } from "react";
import UtmLink from "../UtmLink";
import styles from "../../page.module.css";

export default function Footer({ withSpacing = false }) {
  return (
    <Suspense fallback={null}>
      <footer className={`${styles.footer}${withSpacing ? ` ${styles.footerWithSpacing}` : ""}`}>
        <span>Ateliê Linha & Lucro. Crochê com amor.</span>
        <UtmLink className={styles.footerLink} href="/checkout">
          Comprar agora
        </UtmLink>
      </footer>
    </Suspense>
  );
}
