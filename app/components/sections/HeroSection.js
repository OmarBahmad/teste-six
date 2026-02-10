"use client";

import { Suspense } from "react";
import Image from "next/image";
import UtmLink from "../UtmLink";
import Highlight from "../Highlight";
import styles from "../../page.module.css";

export default function HeroSection({ heroMetrics }) {
  const { accompanyDays, activeStudents, price, socialProofExtra, socialProofAvatars } = heroMetrics;

  return (
    <Suspense fallback={null}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>
            Transforme seu crochê em{" "}
            <Highlight>renda constante</Highlight>
          </h1>
          <p className={styles.subtitle}>
            Venda suas peças toda semana com previsibilidade e lucro real.
          </p>
          <div className={styles.heroCtas}>
            <UtmLink className={styles.primaryCta} href="/checkout">
              Quero entrar na turma
            </UtmLink>
          </div>
          <div className={styles.heroMeta}>
            <div>
              <strong>{accompanyDays} dias</strong>
              <span>de acompanhamento</span>
            </div>
            <div>
              <strong>+{activeStudents}</strong>
              <span>alunas ativas</span>
            </div>
            <div>
              <strong>R$ {price}</strong>
              <span>acesso vitalício</span>
            </div>
          </div>
          <div className={styles.socialProof}>
            <div className={styles.avatarStack}>
              {socialProofAvatars.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Aluna"
                  width={48}
                  height={48}
                  className={styles.stackAvatar}
                />
              ))}
              <div className={styles.stackMore}>+{socialProofExtra}</div>
            </div>
            <span className={styles.socialProofText}>Alunas ativas agora</span>
          </div>
        </div>
        <div className={styles.videoShell}>
          <div className={styles.videoInner}>
<iframe
              style={{ width: "100%", aspectRatio: "16/9", border: 0 }}
              src="https://www.youtube-nocookie.com/embed/VewH_v_qlM0?si=TMBkLm-_Wv8WzLgv"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <p className={styles.videoNote}>
              Aula de 7 minutos. Assista ao conteúdo completo após o pagamento.
            </p>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
