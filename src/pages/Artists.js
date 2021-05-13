import React, { useState, useEffect } from "react";
import AllArtists from '../components/AllArtists';
import OneArtist from '../components/OneArtist';
import randomise from '../utility/randomise';
import rawArtistData from '../data/artistData';

const Artists = ({isShowingAllArtists, setIsShowingAllArtists}) => {

  const [currentArtist, setCurrentArtist] = useState(0);
  const [artistData, setArtistData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    let randomisedArtists = randomise(rawArtistData);
    setArtistData(randomisedArtists);
  }, [artistData]);

  const artistPrevious = e => {
    e.preventDefault();
    if (currentArtist === 0) {
      setCurrentArtist(artistData.length - 1);
    } else {
      setCurrentArtist(currentArtist - 1);
    }
  };

  const artistNext = e => {
    e.preventDefault();
    if (currentArtist === artistData.length - 1) {
      setCurrentArtist(0);
    } else {
      setCurrentArtist(currentArtist + 1);
    }
  };

  const activeClasses = "px-4 py-2 rounded bg-green-300";
  const inActiveClasses = "px-4 py-2 rounded bg-gray-200";

  const artistDisplayToggle = isShowingAllArtists ? 
    <AllArtists artistData={artistData} /> : 
    <OneArtist 
      artistData={artistData} 
      currentArtist={currentArtist} 
      artistNext={artistNext} 
      artistPrevious={artistPrevious} 
    />;

    return (
      <>
        <div>
          <button 
            className={isShowingAllArtists ? activeClasses : inActiveClasses} onClick={()=>{setIsShowingAllArtists(true)}}>All</button>
          <button 
            className={!isShowingAllArtists ? activeClasses : inActiveClasses} onClick={()=>{setIsShowingAllArtists(false)}}>One</button>
        </div>
        {!artistData && <h1>loading</h1>}
        {artistData && artistData.length > 0 &&
         artistDisplayToggle
        }
      </>
    );
}

export default Artists;