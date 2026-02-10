import { getCheckoutData } from "../lib/api";
import CheckoutContent from "./components/content/CheckoutContent";
import Footer from "../components/Footer";

export default async function CheckoutPage() {
  const data = await getCheckoutData();

  return (
    <div style={{ minHeight: "100vh", background: "var(--dark)", color: "var(--white)", padding: "32px 24px 64px", overflowX: "hidden" }}>
      <CheckoutContent data={data} />
      <Footer />
    </div>
  );
}
