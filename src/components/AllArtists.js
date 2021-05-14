import Images from '../components/Images';
export default function AllArtists({artistData, setCurrentArtist, setIsShowingAllArtists}) {

  const handleSelectArtist = (position) => {
    setCurrentArtist(position);
    setIsShowingAllArtists(false);
  };

  return (
    <div className="border-red-400 container">
      <h3>All of the artists</h3>
      <div className="">
        <ul className="grid mx-auto">
          {artistData.map((artist, i) => (
            <li className="w-1/4 hover:bg-blue-800">
              <figure onClick={()=>{handleSelectArtist(i)}}>
                <Images
                  src={artist.artistImg} 
                  alt={'"' + artist.song + '" by ' + artist.artist + " from " + artist.country} 
                  classNames={"rounded-md"} 
                />
                <Images 
                  src={artist.lilFlag}
                  alt={"Flag of " + artist.country}
                  className={"h-12 w-12"}
                />
                <h1>{artist.artist}</h1>
                <h3>{artist.song}</h3>
                <h3>{artist.country}</h3>
              </figure>

            </li>
          ))}
        </ul>
      </div>  
    </div>
  );

};