import Images from '../components/Images';

export default function App({
  artistData,
  currentArtist,
  artistNext,
  artistPrevious
}) {
  let artist = artistData[currentArtist];

  // artistImg": "https://static.eurovision.tv/hb-cgi/images/92f1a64c-00db-4876-a8b5-cc4baed25c2c/card.jpg",
  //   "song": "Last Dance",
  //   "country": "Greece",
  //   "artistLink": "https://eurovision.tv/participant/stefania-2021",
  //   "artist": "Stefania",
  //   "lilFlag": "https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/32/1f1ec-1f1f7.png",
  //   "blurb": "Stefania is a Greek-Dutch singer, actress and YouTuber, who has been performing since a very young age.",
  //   "video": "https://www.youtube-nocookie.com/embed/Er06NBWo4bs",
  //   "lyrics

  return (
    <div class="container">

      <article>
        <figure>
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
        </figure>
        <div className="">
          <h3>{artist.song}</h3>
          <h3>
            <a href={artist.artistLink}>
              {artist.artist}
            </a>
          </h3>
          <h3>{artist.country}</h3>
        </div>
        <div className="">
          <p className="">{artist.blurb}</p>
        </div>
        <p>current artist number {currentArtist + 1} / {artistData.length}</p>
      </article>

      <div className="flex">
        <button onClick={artistPrevious}>Previous</button>
        <button onClick={artistNext}>Next</button>
      </div>
    </div>
  );
}