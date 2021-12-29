// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom';
// import Landing from './Pages/Landing'
// import NotFound from './Pages/NotFound'
import ComingSoon from './Pages/ComingSoon'
import './App.css'

function App() {
  return (
    <HashRouter>
      <ComingSoon />
    </HashRouter>

  );
}

export default App;
