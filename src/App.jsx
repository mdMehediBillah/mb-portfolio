import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  BookLook,
  Contact,
  Home,
  MeghnaStore,
  NotFound,
  PokeFight,
  Projects,
} from "./pages";
import CloneApple15 from "./pages/CloneApple15";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booklook" element={<BookLook />} />
                  <Route path="/meghna-store" element={<MeghnaStore />} />
                  <Route path="/pokeFight" element={<PokeFight />} />
                  <Route path="/cloneIphone15" element={<CloneApple15 />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
