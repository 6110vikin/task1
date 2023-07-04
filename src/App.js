
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Navbar from "../src/pagescomponeat/navbar";
import Dashboard from "../src/pagescomponeat/dashboard";
import Banks from "../src/pagescomponeat/banks";
import Bankaccount from "./pagescomponeat/bankaccount";
import Ppfaccount from "./pagescomponeat/ppfaccount";
import Taxpaid from "./pagescomponeat/taxpaid";
import Uploadstatements from "./pagescomponeat/uploadstatments";
import "./App.css"


const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="banks" element={<Banks />} />
        <Route path="bankaccount" element={<Bankaccount />} />
        <Route path="ppfaccount" element={<Ppfaccount />} />
        <Route path="taxpaid" element={<Taxpaid />} />
        <Route path="uploadstatements" element={<Uploadstatements />} />


        
        </Routes>
        </BrowserRouter>
  )

}
export default App;



