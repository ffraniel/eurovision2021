import randomise from './randomise';

export default function questionCreator (numberOfQuestions, songList) {
  let randomisedArray = randomise(songList);
  let slicedList = randomisedArray.slice(0, numberOfQuestions);
  return slicedList;
};