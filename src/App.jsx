import Header from "./components/Header/Header";
import GlobalStyles from "./components/GlobalStyles/index";
import Banner from "./components/Banner";
import VideosGaleria from "./components/VideosGaleria";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NuevoVideo from "./components/NuevoVideo";

const Home = () => {
  return (
    <>
      <Banner />
      <VideosGaleria />
    </>
  );
};

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-video" element={<NuevoVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
