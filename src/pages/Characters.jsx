import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate(); // rappel

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--marvel-backend--bw9kxpd2k92h.code.run/characters");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container">
      <section className="main-cards">
        {data.results.map((character) => {
          return (
            <div key={character._id}>
                <p>{character.name}</p>
                <img
                  src={
                    character.thumbnail.path + "." + character.thumbnail.extension
                  }
                  alt=""
                  />
                  <button onClick={() => {navigate("/character/" + character._id);}}>Voir les infos</button>
                  <button onClick={() => {navigate("/comics/" + character._id);}}>Comics associés</button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Characters;
