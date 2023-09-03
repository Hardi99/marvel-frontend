import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Cookies from 'js-cookie';

// Pages
import Characters from './pages/Characters';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favourites from './pages/Favorites';
import Character from './pages/Character';
import Comics from './pages/Comics';
import Comic from './pages/Comic';
import CharacterComics from './pages/CharacterComics';

function App() {
  // State dans lequel je stocke le token. Sa valeur de base sera :
  // - Je je trouve un cookie token, ce cookie
  // - Sinon, null
  const [username, setUsername] = useState(Cookies.get("username") || null)
  const [token, setToken] = useState(Cookies.get("token") || null);

  const [search, setSearch] = useState("");

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleUsername = (username) => {
    if (username) {
      Cookies.set("username", username);
      setUsername(username);
    } else {
      Cookies.remove("username");
      setToken(null);
    }
  };

  return (
    <Router>
    {/* Je peux passer des props à mes composants */}
      <Header
        token={token}
        handleToken={handleToken}
        username={username}
        handleUsername={handleUsername}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path='/character/:id' element={<Character />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/comic/:id' element={<Comic />} />
        <Route path='/comics/:id' element={<CharacterComics />}/>
        <Route path='/user/signup' element={<Signup handleToken={handleToken} />} />
        <Route path='/user/login' element={<Login token={token} username={username} handleToken={handleToken} setUsername={setUsername} />} />
        <Route path='/favourites' element={<Favourites token={token} />} />
      </Routes>
    </Router>
  )
}

export default App
