import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
         <Routes>
         </Routes>
         <Routes>
{/*            <Route path="/product/:productId" element={<ProductDetail/>}/>
 */}         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
