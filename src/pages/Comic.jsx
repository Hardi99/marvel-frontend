import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comic = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--bw9kxpd2k92h.code.run/comic/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container">
      <div className="detail-cards">
            <div key={data._id}>
                <img
                  src={
                    data.thumbnail.path + "." + data.thumbnail.extension
                  }
                  alt=""
                />
            </div>
            <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>
      </div>
    </div>
  );
};

export default Comic;
