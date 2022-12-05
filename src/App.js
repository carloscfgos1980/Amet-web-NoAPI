import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
