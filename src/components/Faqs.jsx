import { useEffect, useState } from 'react';
import './Faqs.css';
import QuestionsAndTitles from './QuestionsAndTitles';

const Faqs = () => {
  //Define a state variable to track visibility of each answer
  const [isVisible, setIsVisible] = useState(Array(4).fill(true));

  //Create a function to toggle visibility of the answer
  const toggleAnswer = (index) => {
    console.log('Toggling answer in index:', index)
    setIsVisible((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  useEffect(() => {
    setIsVisible(Array(4).fill(true));
  }, []);

  const questions =  [
    {
        title: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
      },
      {
        title: "Can I use Frontend Mentor projects in my portfolio?",
        answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
      },
      {
        title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
      },
      {
        title: "How can I get help if I'm stuck on a challenge?",
        answer: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated help channel! If you haven't joined yet, you can get an invite to our Discord server here."
      }

]

    return (
        <div className="panel">
           <div className='star-container'>
           <img src="/src/assets/images/icon-star.svg" className="icon-star" alt="" />
            <h1>FAQs</h1>
          </div>
          <QuestionsAndTitles 
            questions={questions}
            isVisible={isVisible}
            toggleAnswer={toggleAnswer}
          />
        </div>
    );
}

export default Faqs;