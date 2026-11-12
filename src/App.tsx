import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutHighlight from "./components/AboutHighlight";
import Portfolio from "./components/Portfolio";
import Consulting from "./components/Consulting";
import Workshops from "./components/Workshops";
import Courses from "./components/Courses";
import Mentoring from "./components/Mentoring";
import VideoSeries from "./components/VideoSeries";
import Articles from "./components/Articles";
import About from "./components/About";
import Contact from "./components/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutHighlight />
              </>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/videos" element={<VideoSeries />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
