import Images from '../components/Images';
export default function AllArtists({artistData, setCurrentArtist, setIsShowingAllArtists}) {

  const handleSelectArtist = (position) => {
    setCurrentArtist(position);
    setIsShowingAllArtists(false);
  };

  return (
    <div className="">
      <div className="mt-2">
        <ul className="block lg:grid lg:grid-cols-4 lg:gap-2 ">
          {artistData.map((artist, i) => (
            <li className="mt-6 lg:mt-0 block bg-blue-100 text-gray-800 rounded-lg hover:bg-blue-400 group" onClick={()=>{handleSelectArtist(i)}}>
              <figure className="relative" >
                <Images
                  src={artist.artistImg} 
                  alt={'"' + artist.song + '" by ' + artist.artist + " from " + artist.country} 
                  classNames={"rounded-md w-full scale-1 group-hover:scale-125 transition-all"} 
                />
                <div className="bg-gray-200 shadow-sm text-blue-900 rounded-full inline-flex items-center h-6 absolute -bottom-2 right-2">
                  <h3 className="inline px-2 text-sm font-bold">{artist.country}</h3>
                  <Images 
                    src={artist.lilFlag}
                    alt={"Flag of " + artist.country}
                    classNames={"h-4 w-4 inline ml-auto mr-2"}
                  />

                </div>
              </figure>
              <h1 className="text-xl ml-1 transform group-hover:translate-x-1 ">{artist.artist}</h1>
              <h3 className="text-lg ml-1">{artist.song}</h3>

            </li>
          ))}
        </ul>
      </div>  
    </div>
  );

};