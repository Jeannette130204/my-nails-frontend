import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import MainPage from '../src/pages/MainPage'
import AddNails from '../src/pages/AddNails'
function App() {
  return (
    <div className="App">
      < NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/nails/new' element={<AddNails/>}/>
      </Routes>
    </div>
  );
}

export default App;
