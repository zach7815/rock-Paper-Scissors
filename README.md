# Rock-Paper-Scissors

My take on the Rock-Paper-Scissors Classic

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This was my take on the classic game Rock-Paper-Scissors. My version includes animation to make the game more interative as well as the option to play one, three or five rounds. It allows you to play against the computer, which generates answers using a simple Math.random algorithm and using the random number as an index to an array of answers.

### Challenges encountered

- Towards the beggining the game kept reseting before rounds, due to me not removing event listeners that started the game. From this I learnt about remove event listeners API.
- This is the most animation I have used in programming so far, so I had to learn how it worked and how to get it to work in the desired sequence I wanted.
- I finally struggled to get game to play Three and Five rounds and finally finish at the respective totals. I overcame this by using callbacks and tracking a round amount in the global scope.

### Screenshot

![](screenshots/Desktop-view.png)
![](screenshots/Mobile-view.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/zach7815/faq-accordian-FEM)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

My process for this was a bit chaotic. I initially started out well doing the HTML but came unstuck in trying to do some CSS elements. This resulted in me needing to change the HTML to be a better structure after looking at other peoples solutions for inspiration.

I then worked on the CSS, but didn't complete it ie make it completely responsive for all media port sizes. I moved a bit too quickly onto the JS.

I think next time it would be better for me to really think about how best to group things in the HTML and then complete the CSS first as while the JS in this project and probably the next will need some CSS fixes once it is working. It is probably better to keep the processes seperate so I can better focus on the specific problems of the language I am using.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

There was quite a few things that I learnt from this challenge. The main things I learnt in therms of CSS were:

- filter and drop shadow for SVG shapes instead of box shadow.
- The use of overflow, and absolute positioning to make shapes overlap container divs for the @box image.
- I also learnt how to combine media queries to specifically target certian phone sizes for both portrait and landscape mode.
- I also made use of root variables to allow me to store design colours that made it easier to add for required colours for different elements.

For Js:

- I learnt that you need to loop over node lists if you want to target them.
- I also learnt how to use classes and CSS transition to give JS interactivity a smoother feel.

To see how you can add code snippets, see below:

```css
:root {
  --violet: hsl(238, 29%, 16%);
  --lightBlue: hsl(240, 73%, 65%);
  --hoverRed: hsl(14, 88%, 65%);
  --ActiveHead: hsl(237, 12%, 33%);
  --innerAccordText: hsl(237, 12%, 33%);
  --dividerColor: hsl(240, 5%, 91%);
}
```

```js
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    hideAll();
    this.classList.add("active");
    downArrow[i].classList.add("rotate");
    this.nextElementSibling.style.maxHeight = this.scrollHeight + "px";
  });
}
```

### Continued development

I think my next step is to build a design of my first version of my own website portfolio I have planned and made. Once done, I think I will want to build more Front End Mentor projects that include JS functionality but approach the project in a more logical approach, as in this one I kept switching back and forth from editing the CSS and JS.

### Useful resources

- [StackOverflow post on overflow](https://stackoverflow.com/questions/12013066/how-to-ignore-parent-elements-overflowhidden-in-css) - This helped me understand and achieve getting the box image to overflow its container element but not be cut up, allowing me to keep of the images together in one div.
- [CSS tricks- drop shadow post](https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/) - This guide helped me understand why my original shadows for the SVGs were so bad, and also help me learn how to position the shadows needed.

## Zachariah Kozlowski-Best

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/zach7815)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
