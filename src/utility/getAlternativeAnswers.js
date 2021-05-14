import randomise from './randomise';

export default function getAlternativeAnswers (songList, correctAnswerCountry) {
  let randomisedArray = randomise(songList);
  let randomAlternativeAnswers = randomisedArray.filter(item => {
    return item.country !== correctAnswerCountry;
  });
  return randomAlternativeAnswers.slice(0, 3);
};