import { checkout } from "../lib/data";
import CheckoutContent from "./components/content/CheckoutContent";
import Footer from "../components/Footer";

export default function CheckoutPage() {

  return (
    <div style={{ minHeight: "100vh", background: "var(--dark)", color: "var(--white)", padding: "32px 24px 64px", overflowX: "hidden" }}>
      <CheckoutContent data={checkout} />
      <Footer />
    </div>
  );
}
