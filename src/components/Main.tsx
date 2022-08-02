import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>

          <h3>
            What would you say that are the best features of your rubber duck?
          </h3>
          <ul className="checkboxes-list">
            <li>
              <label>
                <input type="checkbox" name="features" value="color"></input>
                It's yellow!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features" value="sounds"></input>
                It squeaks!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features" value="logo"></input>
                It has a logo!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features" value="size"></input>
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
                <input type="checkbox" name="features" value="color"></input>
                It's yellow!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features" value="sounds"></input>
                It squeaks!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features" value="logo"></input>
                It has a logo!
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="features" value="size"></input>
                It's big!
              </label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className="form__group radio">
            <li>
              <input id="consistency-1" type="radio" name="consistency"></input>
              <label htmlFor="consistency-1">1</label>
            </li>
            <li>
              <input id="consistency-2" type="radio" name="consistency"></input>
              <label htmlFor="consistency-2">2</label>
            </li>
            <li>
              <input id="consistency-3" type="radio" name="consistency"></input>
              <label htmlFor="consistency-3">3</label>
            </li>
            <li>
              <input id="consistency-4" type="radio" name="consistency"></input>
              <label htmlFor="consistency-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck colour?</h3>
          <ul className="form__group radio">
            <li>
              <input id="colour-1" type="radio" name="colour"></input>
              <label htmlFor="colour-1">1</label>
            </li>
            <li>
              <input id="colour-2" type="radio" name="colour"></input>
              <label htmlFor="colour-2">2</label>
            </li>
            <li>
              <input id="colour-3" type="radio" name="colour"></input>
              <label htmlFor="colour-3">3</label>
            </li>
            <li>
              <input id="colour-4" type="radio" name="colour"></input>
              <label htmlFor="colour-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck logo?</h3>
          <ul className="form__group radio">
            <li>
              <input id="logo-1" type="radio" name="logo"></input>
              <label htmlFor="logo-1">1</label>
            </li>
            <li>
              <input id="logo-2" type="radio" name="logo"></input>
              <label htmlFor="logo-2">2</label>
            </li>
            <li>
              <input id="logo-3" type="radio" name="logo"></input>
              <label htmlFor="logo-3">3</label>
            </li>
            <li>
              <input id="logo-4" type="radio" name="logo"></input>
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
                <input type="checkbox" name="time" value="none"></input>
                I don't like to spend time with it
              </label>
            </li>
          </ul>

          <h4>What else have you got to say about your rubber duck?</h4>
          <label>
            <textarea/>  
          </label>
          <h4>Put your name here (if you feel like it):</h4>
          <label>
            <input className='input'></input>
          </label>
          <h4>Leave us your email pretty please??</h4>
          <label>
            <input className='input'></input>
          </label>
          <button className='form__submit'>Submit Survey!</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
