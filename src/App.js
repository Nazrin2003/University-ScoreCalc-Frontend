import logo from './logo.svg';
import './App.css';
import MarkList from './components/MarkList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MarkList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
