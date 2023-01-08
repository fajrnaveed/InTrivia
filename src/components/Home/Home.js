// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <p className='pt-5'></p>
//     </div>
//   )
// }

// export default Home

import React from "react";
import "../../index.css";
import myimage from "../../assets/myimage.gif";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";
import { BsMouse } from "react-icons/bs";
const Home = () => {
  return (
    <section id="header" class = "header-bg">
      <div className="container header">
        <div className="header-left">
          <h1>
            <span>Interview Trainer</span>
            <div className="sec_heading">Score Your Dream Job</div>
            {/* <div className="third_heading">You got this</div> */}
          </h1>
          <p className="u-text-small u-text-light">
            An interview training application which trains people for job
            interviews with an interactive user experience
          </p>
          <div className="header-cta"> 
            <Button
              text={"Get Started"}
              btnClass={"btn-blue"}
              href={"#"}
            ></Button>
            <Button
              text={"Learn More"}
              btnClass={"btn-dark"}
              href={"#faq"}
            ></Button>
          </div>
        </div>
        <div className="header-right">
          <img src={myimage} alt="img" ></img>
          {/* <img class="gif" src="https://media.giphy.com/media/gzhYo2CtDwj1VbCfJR/giphy.gif" alt="code-img"></img> */}
        </div>

      </div>

      <div className="floating-icon">
      <a href="#howitworks"></a>
      <BsMouse color="beige" size={25}></BsMouse>
      </div>
    </section>
  );
};

export default Home;
