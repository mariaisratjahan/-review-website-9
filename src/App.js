import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { ButtonGroup,Button } from 'react-bootstrap';
import Header from './components/Header/Header';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Language from './components/Language/Language';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Language></Language>
          </Route>
          <Route path="/home">
            <Language></Language>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>     
    </div>
  );
}

export default App;
