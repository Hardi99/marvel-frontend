import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({handleToken, setUsername}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false)

  // state qui stock l'error et me permet de facilement l'afficher en dessous de mon form lors d'un problème
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
            // remplacez l'url suivante avec l'url de votre back déployé
            const response = await axios.post("https://site--marvel-backend--bw9kxpd2k92h.code.run/user/login", {
                email,
                password,
            });
            console.log(response.data);
            handleToken(response.data.token);
            setUsername(response.data.username)
            setIsLogin(!isLogin);
            navigate('/');
    } catch (error) {
      console.log(error.response.data.error);
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div className="contact-form">
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          // deuxième syntaxe possible
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
        />
        <button>Submit</button>
      </form>
      {/* Si errorMessage existe, alors j'affiche cette div ! */}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};

export default Login;
