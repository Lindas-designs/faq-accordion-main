# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - FAQ accordion solution](#frontend-mentor---faq-accordion-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Applying background image to an element:](#applying-background-image-to-an-element)
    - [Defining responsive grid:](#defining-responsive-grid)
    - [Not all elements are focusable by default.](#not-all-elements-are-focusable-by-default)
    - [Executing events when 'Enter' key is pressed:](#executing-events-when-enter-key-is-pressed)
    - [Difference between em and rem](#difference-between-em-and-rem)
    - [Media queries](#media-queries)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./desktop.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Lindas-designs/faq-accordion-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

### Applying background image to an element:

1. It is important to set height of an element (otherwise height might be 0). Height should be defined in vh or % to ensure responsiveness of the page.
2. The cover value is often used to ensure that the background image covers the entire element, while the contain value will ensure that the entire image is visible within the element.

```css
.image {
  height: 30vh;
  width: 100%;
  background-image: url(assets/images/background-pattern-desktop.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### Defining responsive grid:

Using 1fr and auto for defining grid width. 'Auto' results in width based on content`s width. '1 fr' will take up remaining space after fixed sizes are accounted for.

### Not all elements are focusable by default.

To make page responsive to keyboard events, elements need to be focusable. To make an element focusable use attribute 'tabindex' set to 0 inside that element (e.g. <div tabindex="0"></div>). Also, if you don't want it to be focusable via the tab key then use tabindex="-1". In css to create design for focused elements only for keyboard events use :focus-visible pseudoclass on universal selector. This will apply the styles only when an element receives focus via keyboard navigation, such as tabbing, and not when clicked.

Adding box-shadow

```css
*:focus-visible {
  box-shadow: 0 0 0.25rem var(--purple-950);
}
```

Value meaning (in order of appearance) -horizontal offset,vertical offset, blur, color.

### Executing events when 'Enter' key is pressed:

```js
addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    yourFunction();
  }
});
```

### Difference between em and rem

1 em is equal to the font size set in a parent element (this means if you set the font-size in a parent div to 20px and set the font-size of the child div to 2 em, the font-size in the child div will equal 40px.).

1 rem ("root em") refers to the font size of the root element, which is usually the <html> element. If you change the font-size of the root element, all elements sized with the "rem" unit will be updated automatically to maintain their relative size.

To sum up: In CSS, the rem unit is only relative to the document's root element, while the em unit is only relative to the immediate parent of the targeted element. This means that em sizes are inherited from parent elements, while rem sizes are inherited only from the root element.

### Media queries

BREAKPOINTS of media queries do not depend on html font-size. Instead, for media query BREAKPOINTS uses base font size where 1rem=1em=16px.
Dimensions INSIDE media queries ARE based on declared html font-size (in case of rem, in case of em - based on parent).

### Continued development

DRYer way to write JS code.
Research if using bubbling for eventlistener events would be good idea in this case.

### Useful resources

- [Example resource 1](https://www.tutorialpedia.org/blog/css-background-image-why-need-to-set-height/) - This helped me understanding how background-image property works.
- [Example resource 2](https://refine.dev/blog/rem-vs-em/#what-is-css-rem) - This helped me understand rems and ems.

## Author

- Frontend Mentor - [@Lindas-designs](https://www.frontendmentor.io/profile/Lindas-designs)
