import "./intro.css"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

function Intro() {

  const textIntroAnimate = useRef();

  useEffect(() => {
    init(textIntroAnimate.current, 
      { showCursor: true, 
        strings: ["Engineer", "QA Engineer" , "Tester", "Business Analyst" ],
        backDelay: 1500,
        typeSpeed:  100,
      });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
      <div className="imgContainer">
        <img src="assets/me.png" />
      </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome aboard! I'm</h2>
          <h1>Angeline Sambun</h1>
          <h3>Software <span ref={textIntroAnimate}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" />
        </a>
      </div>
    </div>
  )
}

export default Intro
