import { useState } from "react";

import "./scss/style.scss";

import Header from "./components/Header/Header";
import HeroSideImageRight from "./components/HeroSideImageRight/HeroSideImageRight";
import CTASection from "./components/CTASection/CTASection";
import FeatureSplitRight from "./components/FeatureSplitRight/FeatureSplitRight";
import Footer from "./components/Footer/Footer";
import PostsBlogTop from "./components/PostsBlogTop/PostsBlogTop";
import PostsTall from "./components/PostsTall/PostsTall";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <HeroSideImageRight />
      <FeatureSplitRight />
      <PostsTall />
      <CTASection />
      <PostsBlogTop />
      <Footer />
    </div>
  );
}

export default App;
