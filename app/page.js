import styles from "./page.module.css";
import { modules, testimonials, metrics } from "./lib/data";
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

export default function Home() {

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
