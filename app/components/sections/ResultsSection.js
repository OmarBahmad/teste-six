"use client";

import { Suspense } from "react";
import UtmLink from "../UtmLink";
import SectionHeader from "../SectionHeader";
import Highlight from "../Highlight";
import styles from "../../page.module.css";

export default function ResultsSection({ results }) {
  return (
    <Suspense fallback={null}>
      <section className={styles.section}>
        <SectionHeader eyebrow="Resultados">
          Quem aplica, <Highlight>vende de verdade</Highlight>
        </SectionHeader>

        <div className={styles.casesGrid}>
          {results.map((r) => (
            <article key={r.id} className={styles.caseCard}>
              <h3>{r.value}</h3>
              <p>{r.label}</p>
            </article>
          ))}
        </div>

        <UtmLink className={styles.primaryCta} href="/checkout">
          Quero ter esses resultados
        </UtmLink>
      </section>
    </Suspense>
  );
}
