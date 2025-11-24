import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Loader from "./components/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);
    const total = images.length;
    let loaded = 0;

    if (total === 0) {
      setLoading(false);
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
        if (loaded === total) setLoading(false);
      } else {
        img.onload = () => {
          loaded++;
          if (loaded === total) setLoading(false);
        };
      }
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
