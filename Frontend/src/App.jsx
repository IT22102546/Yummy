import { BrowserRouter , Route , Routes} from "react-router-dom"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import Register from "./pages/Register"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<LogIn/>}/>
      <Route path="/sign-up" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}
