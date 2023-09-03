const Favourites = ({characterInfo}) => {

    console.log(characterInfo)
    return (
      <div>
        {characterInfo === undefined ? (
            <p>Cliquez sur un perso</p>
        ) : (
          <div className="details">
            <img src={characterInfo.thumbnail.path + "." + characterInfo.thumbnail.extension} alt="" />
            <p>{characterInfo.description}</p>
          </div>
        )}
      </div>
    )
    }
    
    export default Favourites