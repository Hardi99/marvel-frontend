import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterComics = () => {
  const [comicsPerCharacter, setComicsPerCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--bw9kxpd2k92h.code.run/comics/${id}`
        );
        console.log(response.data);
        setComicsPerCharacter(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
      <div className="container">
            <h1>Comics ou {comicsPerCharacter.name} apparaît</h1>
        <section className="main-cards">
            {comicsPerCharacter.comics.map((comics) => {
              return (
                <div key={comics._id}>
                    <p>{comics.title}</p>
                    <img src={ comics.thumbnail.path + "." + comics.thumbnail.extension}alt=""/>
                    <button onClick={() => {navigate("/comic/" + comics._id);}}>Voir les infos</button>
                </div>
              );
            })}
        </section>
      </div>
  );
};

export default CharacterComics;
