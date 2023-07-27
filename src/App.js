import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Cookies from './components/Cookies';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='cookies' element={<Cookies />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
