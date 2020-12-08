import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}>
          
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
