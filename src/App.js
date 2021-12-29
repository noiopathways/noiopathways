// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './Pages/Landing'
import NotFound from './Pages/NotFound'
import ComingSoon from './Pages/ComingSoon'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>

  );
}

export default App;
