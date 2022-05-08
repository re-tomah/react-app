import React, { useState } from 'react';
import './App.css';



const questions = [
  {
    questionText: 'Which of these is water?',
    answerOptions: [ 'H2O', 'C4H8O4', 'C8H7Br', 'H2'],
    answerCorrect: 'H2O'
  },
  {
    questionText: 'The Moon\'s name is derived from the Latin word meaning what?',
    answerOptions: [ 'Calendar', 'Day', 'Year', 'Month'],
    answerCorrect: 'Month'
  },
  {
    questionText: 'What was the first NASA program to land an object on Mars that sent information back to Earth?',
    answerOptions: [ 'Viking', 'Ithaki', 'Apollo', 'Clementine'],
    answerCorrect: 'Viking'
  },
  {
    questionText: 'What children\'s toy started out as wallpaper cleaner?',
    answerOptions: [ 'Play-doh', 'Lego', 'Hasbro', 'Panini'],
    answerCorrect: 'Play-doh'
  },
  {
    questionText: 'The fear of punishment is known as what?',
    answerOptions: [ 'Awe', 'Poinephobia', 'Trypophobia', 'Alektorophobia'],
    answerCorrect: 'Poinephobia'
  },
  {
    questionText: 'How is the number 20 written with Roman numerals?',
    answerOptions: [ 'XX', 'XV', 'VV', 'VX'],
    answerCorrect: 'XX'
  },
  {
    questionText: 'What is an organism called that lives on or in a host animal?',
    answerOptions: [ 'Parasite', 'Insect', 'Bird', 'Virus'],
    answerCorrect: 'Parasite'
  },
  {
    questionText: 'What is the process of splitting atoms called?',
    answerOptions: [ 'Big Bang', 'Fusion', 'Splatter', 'Fission'],
    answerCorrect: 'Fission'
  },
  {
    questionText: 'The Portuguese man-of-war is a type of what?',
    answerOptions: [ 'Bird', 'Turtle', 'Panther', 'Jelly-Fish'],
    answerCorrect: 'Jelly-Fish'
  },
  {
    questionText: 'Our galaxy is commonly known by what name?',
    answerOptions: [ 'Malin-1', 'Andromeda', 'Milky-Way', 'Tadpol-Galaxy'],
    answerCorrect: 'Milky-Way'
  }
]

function shuffleQuestions(questionList){
  for(let i = (questionList.length - 1); i > 0; i--){
    const j = Math.floor(Math.random() * i);
    const temp = questionList[i];
    questionList[i] = questionList[j];
    questionList[j] = temp;
  }
}

shuffleQuestions(questions);
console.log(questions);



function App(props) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [windowOpen, setWindowOpen] = useState(false);
  const [endWindow, setEndWindow] = useState(false);

  const nextButton = () => {
    if (questionNumber >= props.times) {
      setEndWindow(!endWindow);
    }
    answerButton();
    setQuestionNumber(questionNumber + 1);
  }

  const answerButton = (answer) => {
    setWindowOpen(!windowOpen);
    if (answer === questions[questionNumber].answerCorrect){
      setScore(score + 1);
    }
  }

  const reset = () => {
    setQuestionNumber(0);
    setScore(0);
    setWindowOpen(false);
    setEndWindow(false);

  }

  return(

    <div className="questionaire">
      <div className="questions">
        <span>Question {questionNumber + 1}</span>
        <span>Score: {score}</span>
      </div>
      <div className="questions-text">
        {questions[questionNumber].questionText}
        <div className={endWindow === true ? 'window-ON again' : 'window-OFF'}>
          <span className="right-answer"> Score: {score}<br />Wanna play Again???</span>
          <button /* className="next-question"  */id="play-again" onClick={() => reset()}>Yes</button>
          {/* <button className="next-question" onClick={() => setEndWindow(false)}>No</button> */}
        </div>
        <div className={windowOpen === true ? 'window-ON' : 'window-OFF'}>
          <span className="right-answer">{questions[questionNumber].answerCorrect}</span>
          <button /* className="next-question" */ onClick={() => nextButton()}>Next</button>
        </div>
          
      </div>
      <div className="answers">
        {questions[questionNumber].answerOptions.map((answerOption) => 
        <button disabled={windowOpen || endWindow} className="answerButton" onClick={() => answerButton(answerOption)}>
          {answerOption}
        </button>
        )}
      </div>
    </div>
  )
}

export default App;
