import "@/styles/globals.css";
import { CartProvider } from "@/context/cartContext";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
    <CartProvider>
      <Component {...pageProps} />;
      <Toaster/>
    </CartProvider>
    </SessionProvider>
  );
}
