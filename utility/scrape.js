const fetch = require('node-fetch');
const fs = require("fs");
const path = require("path");
const cheerio = require('cheerio');

const participantsPage = 'https://eurovision.tv/event/rotterdam-2021/participants';
const songList = [];
const completedList = [];
let numberOfActs;
let counter = 0;

async function getData() {
  console.log("here we go");
  try { 
    let res = await fetch(participantsPage);
    let body = await res.text();
    let $ = await cheerio.load(body);
    numberOfActs = $('.group', '.w-full').length;

    $('.group', '.w-full').each(async (i, el) => {
      console.log("found item no ", i + 1);
      const songObj = {
        artistImg: $(el).find('.w-full.h-full.flex.justify-center.content-center img').attr('src'),
        song: $(el).find('.text-base.leading-tight').find('span').text(),
        country: $(el).find('.px-4.h-8.inline-flex.items-center.cursor-pointer.flex-shrink-0.rounded-full.shadow.border.font-bold.text-sm.transition.duration-150.ease-in-out').find('.space-x-1').text().trim(),
        artistLink: $(el).find('.absolute.top-0.left-0.w-full.h-full.outline-none').attr('href'),
        artist: $(el).find('h4').text().trim(),
        lilFlag: $(el).find('.joypixels').attr('src')
      };
      songList.push(songObj);
    });
    console.log("got them all");
  } catch (err) {
    console.log("error: ", err);
  }
};

getData();


let repeat = setInterval(()=>{
  console.log("every 100ms - list length", songList.length);
  if (songList.length === 39) {
    console.log("start second part");
    clearInterval(repeat);
    getSecondaryData();
  }
}, 100);



async function getSecondaryData () {
  songList.forEach(async function eachSong (song) {
    let updatedSong = song;
    const res2 = await fetch(song.artistLink);
    const body2 = await res2.text();
    const $2 = await cheerio.load(body2);
    updatedSong.blurb = $2('article .font-bold.mb-4').text().trim();
    updatedSong.video = $2('iframe.absolute.inset-0.w-full.h-full').attr('src');
    updatedSong.lyrics = $2('.whitespace-pre-line.content').text().trim();
    console.log("pushing")
    completedList.push(updatedSong);
    counter++;
    if (counter === numberOfActs) {
      console.log("it's done");
      fs.writeFile(path.join(__dirname, "../src/data/artistData.json"), JSON.stringify(completedList), 'utf8', function (err) {
        if (err) {
          return console.log("fs write error: ", err);
        }
          console.log("saved list!");
        }); 
      }
  })
};




// fetch(participantsPage)
//   .then(res => res.text())
//   .then(body => {
//     let songList = [];
//     const $ = cheerio.load(body);
//     const numberOfActs = $('.group', '.w-full').length;
//     var counter = 0;
//     $('.group', '.w-full').each(async (i, el) => {
//       const songObj = {
//         artistImg: $(el).find('.w-full.h-full.flex.justify-center.content-center img').attr('src'),
//         song: $(el).find('.text-base.leading-tight').find('span').text(),
//         country: $(el).find('.px-4.h-8.inline-flex.items-center.cursor-pointer.flex-shrink-0.rounded-full.shadow.border.font-bold.text-sm.transition.duration-150.ease-in-out').find('.space-x-1').text().trim(),
//         artistLink: $(el).find('.absolute.top-0.left-0.w-full.h-full.outline-none').attr('href'),
//         artist: $(el).find('h4').text().trim(),
//         lilFlag: $(el).find('.joypixels').attr('src')
//       };
//       const res = await fetch(songObj.artistLink);
//       const body2 = await res.text();
//       const $2 = await cheerio.load(body2);


//       function getSecondLevelData (data, getBlurb, getVideo, getLyrics) {
//         console.log("getting data")

//         if (getBlurb) {
//           songObj.blurb = $2('article').find('.font-bold.mb-4').text().trim().length > 0 ? $2('article').find('.font-bold.mb-4').text().trim() : $2('article').find('.font-bold.mb-4').text();
//         };
//         if (getVideo) {
//           songObj.video = data('iframe.absolute.inset-0.w-full.h-full').attr('src');
//         }
//         if (getLyrics) {
//           songObj.lyrics = data('.whitespace-pre-line.content').text().trim();
//         };

//         if (songObj.blurb.length === 0) {
//           console.log("didn't get BLURB for ", songObj.country);
//           getSecondLevelData(data, true, false, false);
//         } else if (songObj.video.length === 0) {
//           console.log("didn't get VIDEO for ", songObj.country);
//           getSecondLevelData(data, false, true, false);
//         } else if (songObj.lyrics.length === 0) {
//           console.log("didn't get LYRICS for ", songObj.country);
//           getSecondLevelData(data, false, false, true)
//         } else {
//           return songObj;
//         }
//       };

//       const completeObj = getSecondLevelData($2, true, true, true);

//       songList.push(completeObj);
//       counter++;

//       if (counter === numberOfActs) {
//         console.log("it's done");
//         fs.writeFile(path.join(__dirname, "../src/data/artistData.json"), JSON.stringify(songList), 'utf8', function (err) {
//           if (err) {
//             return console.log("fs write error: ", err);
//           }
//             console.log("saved list!");
//           }); 
//       }


//     });
//   })
//   .catch(err => {
//     console.log("Top level error: ", err);
//   });