import { useState } from "react";
import AnswersList from "./AnswersList";

type Survey = {
  review: "";
  email: "";
  username: "";
  consistency: number;
  colour: number;
  logo: number;
  bestFeatures: [];
  worstFeatures: [];
  timeSpent: [];
};

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);
  const [survey, setSurvey] = useState<Survey[]>([]);

  window.survey=survey

  const initialForm = {
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: [],
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <div>
          {survey.map(item =>(
            <article className="answer">
            <h3>{item.username || "Anon"} said:</h3>
            <p>
              <em>
                What would you say that are the best features of your rubber duck?
              </em>
              
            </p>
            <p>
              <em>
                What would you say that are the worst nags of your rubber duck?
              </em>
              
            </p>
            <p>
              <em>How do you rate your rubber duck consistency?</em>
              <span className="answer__line">{item.consistency}</span>
            </p>
            <p>
              <em>How do you rate your rubber duck colour?</em>
              <span className="answer__line">{item.colour}</span>
            </p>
            <p>
              <em>How do you rate your rubber duck logo?</em>
              <span className="answer__line">{item.logo}</span>
            </p>
            <p>
              <em>How do you like to spend time with your rubber duck?</em>
              
            </p>
            <p>
              <em>What else have you got to say about your rubber duck?</em>
              <span className="answer__line">{item.review}</span>
            </p>
          </article>
          ))}
        </div>
      </section>
      <section className="main__form">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();

            let answers = {
              review: event.target.review.value,
              email: event.target.email.value,
              username: event.target.username.value,
              consistency: Number(event.target.consistency.value),
              colour: Number(event.target.colour.value),
              logo: Number(event.target.logo.value),
              bestFeatures: [...document.querySelectorAll('input[name="bestFeatures"]:checked')].map(input => input.value),
              worstFeatures: [...document.querySelectorAll('input[name="worstFeatures"]:checked')].map(input => input.value),
              timeSpent: [...document.querySelectorAll('input[name="time"]:checked')].map(input => input.value)
            };
          console.log(answers)
          setSurvey([...survey, answers])
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>

          <h3>
            What would you say that are the best features of your rubber duck?
          </h3>
          <ul className="checkboxes-list">
            <li>
              <label>
                <input type="checkbox" name="bestFeatures" value="color"></input>
                It's yellow!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="bestFeatures" value="sounds"></input>
                It squeaks!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="bestFeatures" value="logo"></input>
                It has a logo!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="bestFeatures" value="size"></input>
                It's big!
              </label>
            </li>
          </ul>

          <h3>
            What would you say that are the worst bits of your rubber duck?
          </h3>
          <ul className="checkboxes-list">
            <li>
              <label>
                <input type="checkbox" name="worstFeatures" value="color"></input>
                It's yellow!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worstFeatures" value="sounds"></input>
                It squeaks!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worstFeatures" value="logo"></input>
                It has a logo!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="worstFeatures" value="size"></input>
                It's big!
              </label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className="form__group radio">
            <li>
              <input id="consistency-1" type="radio" name="consistency" value='1'></input>
              <label htmlFor="consistency-1">1</label>
            </li>
            <li>
              <input id="consistency-2" type="radio" name="consistency" value='2'></input>
              <label htmlFor="consistency-2">2</label>
            </li>
            <li>
              <input id="consistency-3" type="radio" name="consistency" value='3'></input>
              <label htmlFor="consistency-3">3</label>
            </li>
            <li>
              <input id="consistency-4" type="radio" name="consistency" value='4'></input>
              <label htmlFor="consistency-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck colour?</h3>
          <ul className="form__group radio">
            <li>
              <input id="colour-1" type="radio" name="colour" value='1'></input>
              <label htmlFor="colour-1">1</label>
            </li>
            <li>
              <input id="colour-2" type="radio" name="colour" value='2'></input>
              <label htmlFor="colour-2">2</label>
            </li>
            <li>
              <input id="colour-3" type="radio" name="colour" value='3'></input>
              <label htmlFor="colour-3">3</label>
            </li>
            <li>
              <input id="colour-4" type="radio" name="colour" value='4'></input>
              <label htmlFor="colour-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck logo?</h3>
          <ul className="form__group radio">
            <li>
              <input id="logo-1" type="radio" name="logo" value='1'></input>
              <label htmlFor="logo-1">1</label>
            </li>
            <li>
              <input id="logo-2" type="radio" name="logo" value='2'></input>
              <label htmlFor="logo-2">2</label>
            </li>
            <li>
              <input id="logo-3" type="radio" name="logo" value='3'></input>
              <label htmlFor="logo-3">3</label>
            </li>
            <li>
              <input id="logo-4" type="radio" name="logo" value='4'></input>
              <label htmlFor="logo-4">4</label>
            </li>
          </ul>

          <h3>How do you like to spend time with your rubber duck?</h3>
          <ul className="checkboxes-list">
            <li>
              <label>
                <input type="checkbox" name="time" value="swimming"></input>
                Swimming
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="time" value="bathing"></input>
                Bathing
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="time" value="chatting"></input>
                Chatting
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="time" value="none"></input>I don't
                like to spend time with it
              </label>
            </li>
          </ul>

          <h4>What else have you got to say about your rubber duck?</h4>
          <label>
            <textarea name='review'/>
          </label>
          <h4>Put your name here (if you feel like it):</h4>
          <label>
            <input className="input" name='username'></input>
          </label>
          <h4>Leave us your email pretty please??</h4>
          <label>
            <input className="input" name='email'></input>
          </label>
          <button className="form__submit">Submit Survey!</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
