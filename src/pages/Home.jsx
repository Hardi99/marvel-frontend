import { useState } from 'react';
import '../App.css';
import { homeImages } from '../assets/script'

const Home = () => {

    const [index, setIndex] = useState(0);

    let hasPrev = index > 0
    let hasNext = index < homeImages.length - 1;

    function handlePrevClick() {
      if (hasPrev) {
        setIndex(index - 1);
        console.log(index)
      }
    }
  
    function handleNextClick() {
      if (hasNext) {
        setIndex(index + 1);
        console.log(index)
      }
    }
  
    let image = homeImages[index];

    return (
    <div className="slider-container">  
        <img src={image.url} alt="" />
        {/* Navigation arrows  */}
        <a className="left" onClick={handlePrevClick} disabled={!hasPrev}>❮</a>  
        <a className="right" onClick={handleNextClick} disabled={!hasNext}>❯</a>
        <script src="./script.js"></script>
    </div>
    )
}

export default Home