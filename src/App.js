import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  // const title='welcome to training';
  // const p={name:'xyz', dept:'is'}
  // const link='https://www.instagram.com'
  return (
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Home/>
      
      </div>
    </div>
  );
}

export default App;
