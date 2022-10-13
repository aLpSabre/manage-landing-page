import Swiper from "./carousel/carousel";
import Header from "./header/header"
import LandingPage  from "./landingPage/landingPage";
import SecondPage from "./secondPage/secondPage";
import Carousel from "./carousel/carousel";
import Simplfy from "./simplfy/simplfy";
import Footer from "./footer/footer";
function App() {
  return (

    <><Header/>
    <main>
    <LandingPage/>  
    <SecondPage/>
    <Carousel/>
    <Simplfy/>
    </main>
   <Footer/>
    </>
  ) ;
}

export default App;
