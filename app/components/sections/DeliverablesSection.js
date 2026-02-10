"use client";

import { Suspense } from "react";
import Image from "next/image";
import UtmLink from "../UtmLink";
import SectionHeader from "../SectionHeader";
import Highlight from "../Highlight";
import styles from "../../page.module.css";

export default function DeliverablesSection({ modules, price }) {
  return (
    <Suspense fallback={null}>
      <section className={styles.section}>
        <SectionHeader eyebrow="O que você recebe">
          Tudo o que você precisa para <Highlight>vender</Highlight>
        </SectionHeader>

        <div className={styles.deliverablesGrid}>
          {modules.map((mod) => (
            <article key={mod.id} className={styles.deliverableCard}>
              <div className={styles.moduleImgWrap}>
                <Image
                  src={mod.image}
                  alt={mod.title}
                  width={400}
                  height={240}
                  className={styles.moduleImg}
                />
              </div>
              <div className={styles.deliverableCardTop}>
                <div className={styles.valueTag}>{mod.tag}</div>
              </div>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.priceStack}>
          <div>
            <span>Investimento único</span>
            <strong>R$ {price.toFixed(2).replace(".", ",")}</strong>
          </div>
          <UtmLink className={styles.secondaryCta} href="/checkout">
            Quero garantir minha vaga
          </UtmLink>
        </div>
      </section>
    </Suspense>
  );
}
