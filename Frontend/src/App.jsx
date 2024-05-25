import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const hideHeaderPaths = ["/sign-in", "/sign-up"];

  return (
    <div>
      {!hideHeaderPaths.includes(location.pathname.toLowerCase()) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
