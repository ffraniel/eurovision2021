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

      <article className="bg-gray-200 rounded overflow-hidden">
        <figure className="relative">
          <Images
            src={artist.artistImg} 
            alt={'"' + artist.song + '" by ' + artist.artist + " from " + artist.country} 
            classNames={"w-full lg:max-w-3xl mx-auto"} 
          />
          <div className="bg-gray-200 shadow-sm text-blue-900 rounded-full inline-flex items-center h-6 absolute -bottom-2 right-2">
            <h3 className="inline px-2 text-sm font-bold ">{artist.country}</h3>
            <Images 
              src={artist.lilFlag}
              alt={"Flag of " + artist.country}
              classNames={"h-4 w-4 inline ml-auto mr-2"}
            />
          </div>
        </figure>
        <div className="text-gray-100">
          <h3 className="mx-4 text-gray-700 font-bold text-3xl inline">
            <span className="text-gray-800">{artist.song}</span> by <a className="underline" href={artist.artistLink}>
              {artist.artist}
            </a></h3>

        </div>
        <div className="mx-4">
          <p className="text-gray-700">{artist.blurb}</p>
        </div>
        <p className="text-gray-900 mx-4 flex justify-center my-2">{currentArtist + 1} / {artistData.length}</p>
      </article>

      <div className="flex justify-center my-2">
        <button className="bg-green-500 text-gray-100 hover:bg-green-700 py-1 px-2 rounded mx-2" onClick={artistPrevious}>Previous</button>
        <button className="bg-green-500 text-gray-100 hover:bg-green-700 py-1 px-2 rounded mx-2" onClick={artistNext}>Next</button>
      </div>
    </div>
  );
}