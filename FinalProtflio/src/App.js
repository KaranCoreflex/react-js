import logo from './logo.svg';
import './App.css';
import Assigment1 from "../src/components/Assigment1"
import Assigment2 from './components/Assigment2';
import Assigment3 from './components/Assigment3';
import Assigment4 from './components/Assigment4';
import Assigment0 from './components/Assigment0';
import Assigment5 from './components/Assigment5';

function App() {
  return (
    <div className="container">
      <h2 className='text-center'>React Assignment</h2>
        <div className='row text-center mt-4'>
          <div className='col-md-6'>
            <Assigment0/>
          </div>
          <div className='col-md-6'>
            <Assigment1/>
          </div>
          <div className='col-md-6 mt-4'>
            <Assigment2/>
          </div>
          <div className='col-md-6 mt-4'>
            <Assigment3/>
          </div>
          <div className='col-md-6 mt-4'>
            <Assigment4/>
          </div>
          <div className='col-md-6 mt-4'>
            <Assigment5/>
          </div>
        </div>
    </div>
  );
}

export default App;
