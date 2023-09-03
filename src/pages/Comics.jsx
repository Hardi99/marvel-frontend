import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate(); // rappel

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--marvel-backend--bw9kxpd2k92h.code.run/comics");
        console.log(response.data);
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
        {data.results.map((comic) => {
          return (
            <div key={comic._id}>
            <p>{comic.title}</p>
                <img
                  src={
                    comic.thumbnail.path + "." + comic.thumbnail.extension
                  }
                  alt=""/>
                  <button onClick={() => {navigate("/comic/" + comic._id);}}>Voir les infos</button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Comics;
