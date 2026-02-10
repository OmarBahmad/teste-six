"use client";

import { Suspense } from "react";
import styles from "./page.module.css";
import UtmCapture from "../components/UtmCapture";
import UtmLink from "../components/UtmLink";

export default function ThanksContent({ onboarding }) {
  return (
    <Suspense fallback={null}>
      <UtmCapture />
      <main className={styles.card}>
        <span className={styles.kicker}>Pagamento aprovado</span>
        <h1>Bem-vinda ao Ateliê Linha & Lucro</h1>
        <p>
          Seu acesso será liberado por e-mail em poucos minutos. Enquanto isso,
          conheça o roteiro de ativação para vender crochê esta semana.
        </p>
        <div className={styles.steps}>
          {onboarding.map((step) => (
            <div key={step.id}>
              <strong>{step.title}</strong>
              <span>{step.description}</span>
            </div>
          ))}
        </div>
        <UtmLink className={styles.cta} href="/">
          Voltar para a página do curso
        </UtmLink>
      </main>
    </Suspense>
  );
}
