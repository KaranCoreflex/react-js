import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Countrie from "./component/Countrie";
import EmpList from "./component/EmpList";
import ThankYou from './component/ThankYou';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Contact /> }></Route>
          <Route path='/countrie' element={ <Countrie /> }></Route>
          <Route path='/emplist' element={ <EmpList /> }></Route>
          <Route path='/thankyou' element={ <ThankYou /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
