import { Routes, Route } from 'react-router-dom';
import Login from './Login';

function Aplication() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default Aplication;
