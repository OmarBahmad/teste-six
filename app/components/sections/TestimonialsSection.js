"use client";

import { Suspense } from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import Highlight from "../Highlight";
import styles from "../../page.module.css";

export default function TestimonialsSection({ testimonials }) {
  // Duplicate for infinite scroll effect
  const doubled = [...testimonials, ...testimonials];

  return (
    <Suspense fallback={null}>
      <section className={styles.testimonials}>
        <SectionHeader eyebrow="Depoimentos">
          Quem ja fez, <Highlight>recomenda</Highlight>
        </SectionHeader>

        <div className={styles.sliderTrack}>
          {doubled.map((t, i) => (
            <article key={`${t.id}-${i}`} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {"★".repeat(t.rating)}
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.testimonialAuthor}>
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={44}
                  height={44}
                  className={styles.authorAvatar}
                />
                <div className={styles.authorInfo}>
                  <strong>{t.name}</strong>
                  <span>{t.city}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Suspense>
  );
}
