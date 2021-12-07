import './App.css';
import Head from './components/head/Head';
import HomeScreen from './pages/home/Home';
import {Route, Routes} from "react-router-dom";
import CatalogScreen from "./pages/catalog/Catalog";

function App() {
  return (
    <div className="App">
      <Head/>
      <Routes>
        <Route path='/' exact element={<HomeScreen/>} />
        <Route path='Catalog' element={ <CatalogScreen />} />
      </Routes>

    </div>
  );
}

export default App;
