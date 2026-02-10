"use client";

import { Suspense } from "react";
import styles from "../../page.module.css";
import UtmCapture from "../../../components/UtmCapture";
import UtmLink from "../../../components/UtmLink";

export default function CheckoutContent({ data }) {
  const { course, bonus, total, guarantee, benefits } = data;

  return (
    <Suspense fallback={null}>
      <UtmCapture />
      <header className={styles.header}>
        <div className={styles.brand}>Atelie Linha & Lucro</div>
        <UtmLink className={styles.back} href="/">
          Voltar para a página do curso
        </UtmLink>
      </header>
      <main className={styles.main}>
        <section className={styles.card}>
          <h1 className={styles.title}>Seu curso de crochê está a um passo</h1>
          <p className={styles.subtitle}>
            Finalize o checkout e libere o método de
            crochê com modelos prontos.
          </p>
          <div className={styles.summary}>
            <div>
              <span>{course.name}</span>
              <strong>R$ {course.price}</strong>
            </div>
            <div>
              <span>{bonus.name}</span>
              <strong>R$ {bonus.price}</strong>
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <strong>R$ {total}</strong>
            </div>
          </div>
          <UtmLink className={styles.cta} href="/thanks">
            Confirmar compra do curso
          </UtmLink>
          <p className={styles.note}>
            Checkout seguro. Dados protegidos e enviados via HTTPS.
          </p>
        </section>
        <aside className={styles.support}>
          <h2>O que você recebe hoje</h2>
          <ul>
            {benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className={styles.badge}>{guarantee.label}</div>
        </aside>
      </main>
    </Suspense>
  );
}
