// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom';
import Landing from './Pages/Landing'
// import NotFound from './Pages/NotFound'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Landing />
    </HashRouter>

  );
}

export default App;
