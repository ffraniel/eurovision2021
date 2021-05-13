export default function AllArtists({artistData}) {
  return (
    <div className="border-red-400 container">
      <h3>All of the artists</h3>
      <div className="">
        <ul>
          {artistData.map(artist => (
            <h1>{artist.artist}</h1>
          ))}
        </ul>
      </div>  
    </div>
  );
};