import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Cookies from './components/Cookies';
<<<<<<< HEAD
import Contact from './components/Contact';
=======
>>>>>>> cb69db70f40edf48861ff89fe53e5afbd2369688

function App() {
  return (
    <>
<<<<<<< HEAD
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='cookies' element={<Cookies />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
=======
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='cookies' element={<Cookies />} />
        </Route>
      </Routes>
>>>>>>> cb69db70f40edf48861ff89fe53e5afbd2369688
    </>
  );
}

export default App;
