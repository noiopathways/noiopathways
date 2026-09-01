import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing'
import NotFound from './Pages/NotFound'
import ComingSoon from './Pages/ComingSoon'
import Coaching from './Pages/Coaching'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>

  );
}

export default App;
