import { BrowserRouter , Routes, Route } from "react-router";
import Home from "./pages/home/Home";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
