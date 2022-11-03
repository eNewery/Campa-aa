import './App.css';
import Home from './assets/Home';
import About from './assets/About';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route exact path='/' element={<Home/>}></Route>
  <Route exact path='/About' element={<About/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
