import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import Register from '../pages/register/Register';

function App() {
 
  return (
        <Router>
          {/* <Header /> */}
          <Routes>
            {/* Autres */}
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/tarifs' element={<Tarifs />} /> */}
            <Route path='/register' element={<Register />} /> {/* Ajoutez cette ligne */}
            {/* <Route path='/tarifs' element={<Tarifs />} /> */}
          </Routes>
          {/* <Footer /> */}
        </Router>
  );
}

export default App;
