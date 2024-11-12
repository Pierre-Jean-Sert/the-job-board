import { useState } from "react";
import "./App.css";

// Import du composant Header
import Header from "./components/Header.jsx";

// Import du composant Jobs
import Jobs from "./components/Jobs.jsx";

// Import du composant Footer
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      {/* Appel du composant Header */}
      <Header title="The Job Board" />

      {/* Appel du composant Jobs */}
      <Jobs />

      {/* Appel du composant Footer */}
      <Footer />
    </>
  );
}

export default App;
