import { useLocation } from "react-router-dom";

import { Header } from "./components/shared/header/Header";
import RouteController from "./routes";
import { useGsapScrollAnimation } from "./hooks/useGsapScrollAnimation";

import "./App.css";
import Footer from "./components/shared/footer/Footer";

function App() {
  useGsapScrollAnimation();
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes("login") && !pathname.includes("register") && (
        <Header />
      )}
      <RouteController />
      {!pathname.includes("login") && !pathname.includes("register") && (
        <Footer />
      )}
    </>
  );
}

export default App;
