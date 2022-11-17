import './App.css';
import Home from './assets/Home';
import About from './assets/About';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Model1 from './assets/Model1';
import Model2 from './assets/Model2';
import Model3 from './assets/Model3';
import Model4 from './assets/Model4';
import Provider from './Context';
import Contact from './assets/Contact';
function App() {


  return (
    <div className="App">
<BrowserRouter>
<Provider>
<Routes>
  <Route exact path='/' element={<Home/>}></Route>
  <Route exact path='/About' element={<About/>}></Route>
  <Route exact path='/Model-1' element={<Model1/>}></Route>
  <Route exact path='/Model-2' element={<Model2/>}></Route>
  <Route exact path='/Model-3' element={<Model3/>}></Route>
  <Route exact path='/Model-4' element={<Model4/>}></Route>
<Route exact path='/Contact' element={<Contact/>}></Route>
</Routes>
</Provider>
</BrowserRouter>
    </div>
  );
}


export default App;
