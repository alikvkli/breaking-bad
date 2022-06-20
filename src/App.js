import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigation />}>
          <Route path="" element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}