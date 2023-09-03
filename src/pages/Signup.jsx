import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [register, setRegister] = useState(false)

  // state qui stock l'error et me permet de facilement l'afficher en dessous de mon form lors d'un problème
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
        // Vérifier que les 2 password sont identiques
        if (password === checkPassword) {
            // remplacez l'url suivante avec l'url de votre back déployé
            const response = await axios.post("https://site--marvel-backend--bw9kxpd2k92h.code.run/user/signup", {
              username: username,
              password: password,
              checkPassword: checkPassword,
              email: email,
            });
            console.log(response.data);
          setRegister(!register);
          console.log(!register)
        } else {
            setErrorMessage('Vos 2 mots de passe ne sont pas identiques !');
        }
    } catch (error) {
      console.log(error.response.data.error);
      setErrorMessage(error.response.data.error);
    }
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  return (
    <div className="contact-form">
      <div>Signup</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="email"
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
        <input
          type="password"
          placeholder="Check your password"
          name="checkPassword"
          value={checkPassword}
          onChange={(event) => {
            const value = event.target.value;
            setCheckPassword(value);
          }}
        />
        <button>Submit</button>
      </form>
      {/* Si errorMessage existe, alors j'affiche cette div ! */}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};

export default Signup;
