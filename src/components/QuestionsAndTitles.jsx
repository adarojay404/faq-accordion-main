import React from "react"

const QuestionsAndTitles = ({ questions, isVisible, toggleAnswer }) => {
  return (
    <>
      {questions.map((question, index) => (
        <div key={index} className="questions">
        <div className="wrapper">
          <h2 onClick={() => toggleAnswer(index)}>
            {question.title}
          </h2>
          <img 
            src={isVisible[index] ? "/src/assets/images/icon-plus.svg" : "/src/assets/images/icon-minus.svg"}
            className="icon-plus"
            alt=""
            onClick={() => toggleAnswer(index)}
          />
        </div> 

        <div className={isVisible[index] ? 'hidden-answer' : 'visible-answer'}>
          <p>{question.answer}</p>
        </div>
        <br />
        
        <div className="divider"></div>
        <br />
      </div>
      ))}
      
    </>
  );
}

export default QuestionsAndTitles;