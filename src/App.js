import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing'
import NotFound from './Pages/NotFound'
import ComingSoon from './Pages/ComingSoon'
import './App.css'
import AboutPage from './Pages/About';
import PortfolioPage from './Pages/Portfolio';
import { AdminPage } from './Pages/Admin';
import MembershipPage from './Pages/Membership';
import AppearancesPage from './Pages/Appearances';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="/speaking" element={<AppearancesPage />} />
        {/* <Route path="/members" element={<ComingSoon />} /> */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>

  );
}

export default App;
