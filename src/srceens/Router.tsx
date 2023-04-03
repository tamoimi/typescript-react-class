import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Header from "./components/Header";
import Home from "./Home";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
