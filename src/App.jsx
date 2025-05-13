import { useLocation } from "react-router-dom";

import { Header } from "./components/header/Header";
import RouteController from "./routes";
import { useGsapScrollAnimation } from "./hooks/useGsapScrollAnimation";

import "./App.css";

function App() {
  useGsapScrollAnimation();
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes("login") && !pathname.includes("register") && (
        <Header />
      )}
      <RouteController />
    </>
  );
}

export default App;
