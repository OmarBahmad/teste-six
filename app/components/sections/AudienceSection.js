"use client";

import { Suspense } from "react";
import UtmLink from "../UtmLink";
import SectionHeader from "../SectionHeader";
import Highlight from "../Highlight";
import styles from "../../page.module.css";

export default function AudienceSection({ audience }) {
  return (
    <Suspense fallback={null}>
      <section className={styles.sectionAlt}>
        <SectionHeader eyebrow="Para quem é">
          Artesãs que já <Highlight>entenderam o jogo</Highlight>
        </SectionHeader>

        <div className={styles.audienceList}>
          {audience.map((item) => (
            <div key={item.id} className={styles.listItem}>
              {item.text}
            </div>
          ))}
        </div>

        <UtmLink className={styles.secondaryCta} href="/checkout">
          Essa é minha hora
        </UtmLink>
      </section>
    </Suspense>
  );
}
