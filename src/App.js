
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddBus from './components/AddBus';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
        <Routes>

        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/addbus" element={<AddBus/>}/>
        <Route path="/viewall" element={<ViewAll/>}/>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
