

import { NavBar} from "./components"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Quiz,
  IsTriangle,
  Hypotenuse,
  Area
} from "./pages"
function App() {
  return (
    <div >
      <Router >
        <NavBar />
        <Routes>
          <Route path="/" element={<IsTriangle />}  />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/hypotenuse" element={<Hypotenuse />} />
          <Route path="/area" element={<Area />} />
        </Routes>
    
      </Router>

    </div>
  );
}

export default App;
