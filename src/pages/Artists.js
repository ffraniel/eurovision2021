import AllArtists from '../components/AllArtists';
import OneArtist from '../components/OneArtist';

const Artists = ({isShowingAllArtists, setIsShowingAllArtists}) => {


  const activeClasses = "px-4 py-2 rounded bg-green-300";
  const inActiveClasses = "px-4 py-2 rounded bg-gray-200";

  return (
    <>
      <div>
        <button className={isShowingAllArtists ? activeClasses : inActiveClasses} onClick={()=>{setIsShowingAllArtists(true)}}>All</button>
        <button className={!isShowingAllArtists ? activeClasses : inActiveClasses} onClick={()=>{setIsShowingAllArtists(false)}}>One</button>
      </div>
      {isShowingAllArtists ? <AllArtists /> : <OneArtist />}
    </>
  );
}

export default Artists;