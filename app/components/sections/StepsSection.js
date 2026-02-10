import SectionHeader from "../SectionHeader";
import Highlight from "../Highlight";
import styles from "../../page.module.css";

export default function StepsSection({ steps }) {
  return (
    <section className={styles.sectionAlt}>
      <SectionHeader eyebrow={`Método em ${steps.length} passos`}>
        Da primeira mensagem ao <Highlight>pedido fechado</Highlight>
      </SectionHeader>

      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.id} className={styles.stepCard}>
            <div className={styles.stepNum}>{step.number}</div>
            <strong>{step.title}</strong>
            <span>{step.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
