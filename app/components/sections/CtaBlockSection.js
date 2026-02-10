"use client";

import { Suspense } from "react";
import UtmLink from "../UtmLink";
import Highlight from "../Highlight";
import styles from "../../page.module.css";

export default function CtaBlockSection({ price }) {
  return (
    <Suspense fallback={null}>
      <section className={styles.ctaBlock}>
        <h2>
          Sua <Highlight>vaga</Highlight> está esperando
        </h2>
        <p>
          Acesso imediato à plataforma, scripts de venda e comunidade exclusiva.
        </p>
        <UtmLink className={styles.primaryCta} href="/checkout">
          Quero minha vaga — R$ {price}
        </UtmLink>
      </section>
    </Suspense>
  );
}
