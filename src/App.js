// import logo from './ball.png';
import "./App.scss";
import "./styles/bg.scss";
import "./styles/page.scss";
import "./styles/basic.scss";
import "./styles/width.scss";
import "./styles/padding.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sweet from "./pages/Sweet";
import Savoury from "./pages/Savoury";
import Catering from "./pages/Catering";
import About from "./pages/About";
import Blank from "./pages/Blank";

import Contact from "./pages/footer/Contact";
import Faqs from "./pages/footer/Faqs";
import Sustainability from "./pages/footer/Sustainability";
import Privacy from "./pages/footer/Privacy";
import Terms from "./pages/footer/Terms";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="bg-image"></div>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/sweet" exact={true} element={<Sweet />} />
            <Route path="/savoury" exact={true} element={<Savoury />} />
            <Route path="/catering" exact={true} element={<Catering />} />
            <Route path="/about" exact={true} element={<About />} />
            <Route path="/404" exact={true} element={<Blank />} />

            {/* Footer Pages */}
            <Route path="/contact" exact={true} element={<Contact />} />
            <Route path="/faqs" exact={true} element={<Faqs />} />
            <Route
              path="/sustainability"
              exact={true}
              element={<Sustainability />}
            />
            <Route path="/privacy-policy" exact={true} element={<Privacy />} />
            <Route
              path="/terms-and-conditions"
              exact={true}
              element={<Terms />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
