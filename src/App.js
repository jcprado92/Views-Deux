import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from './Pages/Index';
import Show from './Pages/Show';
import New from './Pages/New';
import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path="/views" element={ <Index /> } />
        <Route path='/views/:id' element={ <Show /> } />
        <Route path='/views/new' element={ < New /> } />
        <Route path='/views/:id/edit' element={ <Edit /> } />
         <Route path='*' element={ <FourOFour /> } /> 
      </Routes>
      </div>
    </Router>
  );
}

export default App;
