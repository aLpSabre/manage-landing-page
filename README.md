# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


### Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

💻-Desktop-view
<br/>
![Desktop-view]("./gifs/desktop.gif")
<br/>
📱-Mobile-view
<br/>
![Mobile-view]("./gifs/mobile.gif")


### Links

- Solution URL: [Click here](https://github.com/aLpSabre/manage-landing-page)
- Live Site URL: [Click here](https://alpsabre.github.io/manage-landing-page/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SASS/SCCS 
- SCSS Modules
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to make carousel with the Swiper JS.

```js

import "../../scss/components/_carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default () => {
  return (
    <section className="swiper-section" id="careers">
    <h1>What they’ve said</h1>
    <Swiper
      // install Swiper modules
      modules={[ Pagination]}
      slidesPerView={1}
      spaceBetween={5}
      loop={true}
      centeredSlides={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log()}
      onSlideChange={() => console.log()}
 
  	
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween:5,
        },
        1023: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        }
      
      }}
   
    >
```

### Useful resources

- [React Doc](https://reactjs.org/docs/getting-started.html) 
- [Swiper JS](https://swiperjs.com/) 


## Author

- Frontend Mentor - [@aLpSabre](https://www.frontendmentor.io/profile/yourusername)


