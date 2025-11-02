import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartProvider from './context/Cartcontext.jsx'
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log(clerkPubKey);

if (!clerkPubKey) {
  console.error("❌ Clerk publishable key is missing!");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <CartProvider>
        <App />
      </CartProvider>
    </ClerkProvider>
  </StrictMode>
);
