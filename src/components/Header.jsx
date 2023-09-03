import '../App.css'
import logo from '../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, handleToken, username, search, setSearch }) => {

  const navigate = useNavigate(); // rappel

    return (
        <header>
            <div className='container'>
                <img src={logo} alt="" onClick={() => {navigate('/')}} />
                {/* <input
                  type="text"
                  value={search}
                  placeholder="Rechercher des articles"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                /> */}
                <nav>
                    <button onClick={() => {navigate('/characters')}}>Characters</button>
                    <button onClick={() => {navigate('/comics')}}>Comics</button>
                  {token ? (
                    <div className='login-content'>
                      <p>Welcome {username} !!</p>
                      <button className='red'
                        onClick={() => {
                          handleToken(null);
                        }}
                      >
                        Déconnexion
                      </button>
                      {/* <button className='header-button-reverse'><Link to="/favourites" >Vos favoris</Link></button> */}
                    </div>
                  ) : (
                    <>
                      <button><Link to="/user/login" >Login</Link></button>
                      <button><Link to="/user/signup" >Signup</Link></button>
                    </>
                  )}
                </nav>
            </div>
        </header>)
}

export default Header