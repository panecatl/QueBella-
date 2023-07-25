import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Cookies from './components/Cookies ';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='cookies' element={<Cookies />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
