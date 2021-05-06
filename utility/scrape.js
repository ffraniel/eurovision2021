const fetch = require('node-fetch');
const fs = require("fs");
const path = require("path");
const cheerio = require('cheerio');

const participantsPage = 'https://eurovision.tv/event/rotterdam-2021/participants';

fetch(participantsPage)
  .then(res => res.text())
  .then(body => {
    let songList = [];
    const $ = cheerio.load(body);
    const numberOfActs = $('.group', '.w-full').length;
    var counter = 0;
    $('.group', '.w-full').each((i, el) => {
      const songObj = {
        artistImg: $(el).find('.w-full.h-full.flex.justify-center.content-center img').attr('src'),
        song: $(el).find('.text-base.leading-tight').find('span').text(),
        country: $(el).find('.px-4.h-8.inline-flex.items-center.cursor-pointer.flex-shrink-0.rounded-full.shadow.border.font-bold.text-sm.transition.duration-150.ease-in-out').find('.space-x-1').text().trim(),
        artistLink: $(el).find('.absolute.top-0.left-0.w-full.h-full.outline-none').attr('href'),
        artist: $(el).find('h4').text().trim(),
        lilFlag: $(el).find('.joypixels').attr('src')
      };
      fetch(songObj.artistLink)
        .then(res => res.text())
        .then(body2 => {
          const $2 = cheerio.load(body2);
          songObj.blurb = $2('article').find('.font-bold.mb-4').text().trim().length > 0 ? $2('article').find('.font-bold.mb-4').text().trim() : $2('article').find('.font-bold.mb-4').text();
          songObj.video = $2('.ytp-title-link.yt-uix-sessionlink').attr('href');
          songObj.lyrics = $2('.whitespace-pre-line.content').text().trim();
          songList.push(songObj);
          counter++;
          if (counter === numberOfActs) {
            console.log("it's done");
            fs.writeFile(path.join(__dirname, "../src/data/testData.json"), JSON.stringify(songList), 'utf8', function (err) {
              if (err) {
                return console.log("fs write error: ", err);
              }
                console.log("saved list!");
              }); 
          }
        }).catch(err => {
          console.log("OOPS, Artist page error: ", err);
        })
    });
  })
  .catch(err => {
    console.log("Top level error: ", err);
  });