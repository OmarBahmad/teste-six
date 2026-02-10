import styles from "./page.module.css";
import { getCheckoutData } from "../lib/api";
import ThanksContent from "./ThanksContent";
import Footer from "../components/Footer";

export default async function ThanksPage() {
  const data = await getCheckoutData();

  return (
    <div className={styles.page}>
      <ThanksContent onboarding={data.onboarding} />
      <Footer />
    </div>
  );
}
