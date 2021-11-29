import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import License from "./pages/license";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/license" exact element={<License />} />
      </Routes>
    </BrowserRouter>
  );
}
    



export default App;