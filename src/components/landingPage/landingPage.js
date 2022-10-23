import illustration from "../../images/illustration-intro.svg";

import "../../scss/components/_landing-page.scss";

const LandingPage = () => {

  return (

    <>
  <div className="tablet"></div>
      <div className="container" id="home">
    
        <div className="left">
          <h1>Bring everyone together to build better products.</h1>
          <p>  Manage makes it simple for software teams to plan day-to-day
            tasks while keeping the larger team goals in view.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="right ">
          <img src={illustration} alt="illustration" /></div>
      </div>
    </>
  )

}

export default LandingPage 
