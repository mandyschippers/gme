import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Emulator from "./pages/homePage/emulator";

function App() {
  return (
    <Router>
      {/* <NavMenu /> */}
      <Routes>
        <Route path="/" element={<Emulator />} />
      </Routes>
    </Router>
  );
}

export default App;
