export default function App({
  artistData,
  currentArtist,
  artistNext,
  artistPrevious
}) {
  let artist = artistData[currentArtist];

  return (
    <div class="container">

      <article>
        <h3>{artist.artist}</h3>
        <h3>{artist.country}</h3>
        <p>current artist number {currentArtist + 1} / {artistData.length}</p>
      </article>
      <div className="flex">
        <button onClick={artistPrevious}>Previous</button>
        <button onClick={artistNext}>Next</button>
      </div>
    </div>
  );
}