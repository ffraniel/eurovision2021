const fetch = require('node-fetch');
const fs = require("fs");
const cheerio = require('cheerio');

const participantsPage = 'https://eurovision.tv/event/rotterdam-2021/participants';


fetch(participantsPage)
  .then(res => res.text())
  .then(body => {
    const $ = cheerio.load(body);
    let allItems = $('.group', '.w-full').find("h4");
    console.log(typeof allItems)
    // let filteredList = allItems.filter(item => item.length > 0);
    // console.log(filteredList);
  })
  .catch(err => {
    console.log("Error: ", err);
  });




/////////////////////////////////////////////////////////////////////////////////////////
// var classes = ".w-full.flex";
// var filterClasses = ".group .flex .flex-col .w-full .flex-1 .relative .bg-white .text-black";
// // var lyricsClass = ".whitespace-pre-line";
// // var songsList = [];

// fetch(participantsPage)
//   .then(res => res.text())
//   .then(body => {
//     const $ = cheerio.load(body);
//     var counterAll = 0;
//     $((classes)).each(elem => {
//       counterAll++;
      
    
//     });

//     console.log(counterAll);

//     $((classes)).each((i, element) => {
//       const item = $(element).html();


//         // let spanItem = $(item).find('.card__content span').text().split('\n');
//         // const songObj = {
//         //   artistImg: $(item).find('img.w-full').attr('src'),
//         //   songName: spanItem[spanItem.length - 1].trim(),
//         //   country: $(item).find('.card__pill span').text().trim(),
//         //   artistLink: $(item).find('.aspect-ratio--card').attr('href'),
//         //   artist: $(item).find('.h3.card__title.mb-5').text().trim(),
//         //   lilFlag: $(item).find('.emojione').attr('src')
//         // };

//         // fetch(songObj.artistLink)
//         //   .then(res => res.text())
//         //   .then(body2 => {
//         //     const $2 = cheerio.load(body2);

//         //     songObj.lyrics = $2(lyricsClass).text();
//         //     songObj.blurb = $2('article .font-bold.text-xl.mb-30').text();
//         //     songObj.video = $2('.video-wrapper iframe').attr('src');

//         //     songsList.push(songObj);
//         //     if (songsList.length === counter) {
//         //       console.log("finished");
//         //       fs.writeFile("../src/data/lyricsJson.json", JSON.stringify(songsList), 'utf8', function (err) {
//         //         if (err) {
//         //           return console.log(err);
//         //         }
//         //         console.log("saved it!");
//         //       }); 
//         //     }
//         //   })
//         //   .catch(err => {
//         //     console.log("Error: ", err);
//         //   })



//     })
//   });