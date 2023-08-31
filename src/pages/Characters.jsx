import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://marvel-backend:8080/characters");
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
    <div>
      {data.results.map((character) => {
        return (
          <article key={character._id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt=""
            />
          </article>
        );
      })}
    </div>
  );
};

export default Characters;
