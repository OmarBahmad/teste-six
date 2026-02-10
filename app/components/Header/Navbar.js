"use client";

import { Suspense, useEffect, useState } from "react";
import UtmCapture from "../UtmCapture";
import UtmLink from "../UtmLink";
import styles from "../../page.module.css";

function NavbarInner() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <UtmCapture />

      {/* Static header — always in document flow */}
      <header className={styles.nav}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>Ateliê Linha & Lucro</span>
          <span className={styles.brandTag}>Crochê</span>
        </div>
        <UtmLink
          className={styles.navCta}
          href="/checkout"
          style={fixed ? { visibility: "hidden", height: 0, padding: 0, margin: 0, overflow: "hidden" } : undefined}
        >
          Quero mudar minha vida
        </UtmLink>
      </header>

      {/* Spacer to compensate when CTA leaves flow */}
      <div
        className={styles.navSpacer}
        style={{ height: fixed ? 30 : 0 }}
      />

      {/* Fixed bottom bar — slides up on scroll */}
      <div className={`${styles.fixedBar} ${fixed ? styles.fixedBarShow : ""}`}>
        <div className={styles.fixedBrand}>
          <span className={styles.brandMark}>Ateliê Linha & Lucro</span>
          <span className={styles.brandTag}>Crochê</span>
        </div>
        <UtmLink className={styles.fixedCta} href="/checkout">
          Quero mudar minha vida
        </UtmLink>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarInner />
    </Suspense>
  );
}
