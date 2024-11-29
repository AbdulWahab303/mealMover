import "@/styles/globals.css";
import { CartProvider } from "@/context/cartContext";
import { Toaster } from "@/components/ui/toaster";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />;
      <Toaster/>
    </CartProvider>
  );
}
