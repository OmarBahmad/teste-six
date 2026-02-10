import styles from "./page.module.css";
import { getModules, getTestimonials, getMetrics } from "./lib/api";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import {
  HeroSection,
  DeliverablesSection,
  StepsSection,
  ResultsSection,
  AudienceSection,
  TestimonialsSection,
  CtaBlockSection,
} from "./components/sections";

export default async function Home() {
  const [modules, testimonials, metrics] = await Promise.all([
    getModules(),
    getTestimonials(),
    getMetrics(),
  ]);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HeroSection heroMetrics={metrics.hero} />
        <DeliverablesSection modules={modules} price={metrics.hero.price} />
        <StepsSection steps={metrics.steps} />
        <ResultsSection results={metrics.results} />
        <AudienceSection audience={metrics.audience} />
        <TestimonialsSection testimonials={testimonials} />
        <CtaBlockSection price={metrics.hero.price} />
      </main>
      <Footer withSpacing />
    </div>
  );
}
