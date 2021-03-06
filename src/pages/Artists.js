import React, { useState, useEffect } from "react";
import AllArtists from '../components/AllArtists';
import OneArtist from '../components/OneArtist';
import randomise from '../utility/randomise';
import rawArtistData from '../data/artistData';

const Artists = () => {

  const [currentArtist, setCurrentArtist] = useState(0);
  const [artistData, setArtistData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShowingAllArtists, setIsShowingAllArtists] = useState(true);

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

  const activeClasses = "px-4 py-2 rounded bg-green-500 hover:bg-green-400";
  const inactiveClasses = "px-4 py-2 rounded bg-gray-200 hover:bg-gray-300";

  const artistDisplayToggle = isShowingAllArtists ? 
    <AllArtists 
      artistData={artistData}
      setCurrentArtist={setCurrentArtist}
      setIsShowingAllArtists={setIsShowingAllArtists}
    /> : 
    <OneArtist 
      artistData={artistData} 
      currentArtist={currentArtist}
      artistNext={artistNext} 
      artistPrevious={artistPrevious} 
    />;

    return (
      <div className="container px-12 mx-auto">
        <div className="flex my-4">
          <button 
            className={isShowingAllArtists ? activeClasses : inactiveClasses} onClick={()=>{setIsShowingAllArtists(true)}}>All</button>
          <button 
            className={!isShowingAllArtists ? activeClasses : inactiveClasses} onClick={()=>{setIsShowingAllArtists(false)}}>One</button>
        </div>

        {!artistData && <h1 className="text-gray-100">loading</h1>}

        {artistData && artistData.length > 0 &&
         artistDisplayToggle
        }
      </div>
    );
}

export default Artists;