import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [todos, settodos] = useState([
    {
      title: "Hey",
      desc: "i am a grocery todo",
    },
    {
      title: "Hello",
      desc: "i am a medicals todo",
    },
    {
      title: "Yo",
      desc: "i am a workout todo",
    },
  ]);

  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //       <div /*some tailwind styling*/ >
  //         <div className="todo">{todo.title}</div>
  //         <div className="todo">{todo.desc}</div>
  //       </div>
  //     </>
  //   );
  // }; //we made a reusable todo component

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setShowBtn(!showBtn)}
        >
          ToggleShowBtn
        </button>

        {/* {showBtn?<button>i will only when 2nd button is clicked</button> : ""} */}
        {showBtn ? (
          <button>ShowBtn Is true</button>
        ) : (
          <button>ShowBtn Is False</button>
        )}

        {/* {showBtn && <button>i will only when 2nd button is clicked</button>} */}
        {/* {showBtn && <button>ShowBtn Is True</button>} */}

        {/* <button onClick={()=>setShowBtn(!showBtn)}></button> */}

        {/* to render a list in react js we use a special method */}
        {/* when we render lists using map we have to give unique keys */}

        {todos.map((todo) => {
          // return <Todo key={todo.title} todo={todo} />;

          /*do not press enter after return or it will return blank or else add parenthesis in same line if want to press enter */
          /*we have to compulsorily add a unique key in lists rendering*/

          return (
            <div key={todo.title}/*some tailwind styling*/>
              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          );
        })}
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
