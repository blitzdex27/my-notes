# CSS

## Selectors

- tag, id, class, attribute selectors, pseudo selectors

### attribute selector

```css
[attr='value'] {
  margin: 20px;
}
```

### specificity

From highest to lowest

- in-line style
- id selector
- class selector
- succeedence in css
- inherited style

### Applied visual design

#### Properties

- `text-align: justify`, can be center, left, right also
- `font-weight: bold`, can be numeric value in px
- `<strong></strong>, gives strong importance to text
- `text-decoration: underline`, can be strikethrough, etc.
- `<u></u>`, underlines, signifies that the text is important
- `font-style: italic`, italicize text, gives emphasis
- `<em></em>, emphasize
- `text-decoration: line-through`, applies a strikethrough to the text
- `<s></s>, strikethrough
- `<hr/>, adds horizontal line to html, can be used to define a change in topic or to visually separate groups of content
- `background-color: rgba(r,g,b,a)`, the a represents alpha or level of opacity, 1 for fully opaque or solid color, 0 if full transparent and clear
- `font-size: 16px`, adjust the size of font
- `box-shadow: offset-x offset-y blur-radius spread-radius color`, applies one or more shadows to an element
  - `offset-x`, how far to push the shadow horizontally from the element
  - `offset-y`, how far to push the shadow vertically from the element
  - `blue-radius` and `spread-radius` are optional
  - multiple box-shadows can be created by using commas
    ```css
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    ```
- `opacity: 0.7`, sets the opacity of an element
- `text-transform: lowercase`, changes the appearance of text, a convenient way to make sure text on a webpage appears consistently, without having to change the text content of the actual HTML elements
  - can be `lowercase`, `uppercase`, `capitalize`, `initial`, `inherit`, `none` -`line-height: 25px`, changes the height of each line in a block of text -`some-selector: hover { properties }`, a pseudo selector, apply properties once the condition is met
- `position: relative; bottom: 10px;`, used to move elements relative to current position
- `position: absolute; bottom:10px;`, used to move elements relative to ancestor position
- `position: fixed; top: 10px`, used to move elements relative to browser window (body)
- `float: left`, used to remove elements from normal flow and be either push left or right, commonly used with `width` property to specify how much horizontal space it would take.
- `z-index: 2`, specifies how elements are stacked together
- `display: block`, converts an element into block element, can use `inline`

#### Colors

- Complementary colors, pairs colors opposite to each other
- Split-complementary, pairs the color to the 2 adjacent colors opposite to it
- In practice, one of the colors is usually dominant, while the complement is used to bring visual attention to certain content on the page
- `hsl()`, h-hue, s-saturation, l-lightness, is an alternative way to pick color
  - hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.
  - saturation is the amount grayness, fully saturated color has almost no gray in it, 100% value is fully saturated
  - lightness is the amount of white or black in a color, ranging from 0%(black) to 100%(white), 50% is normal color
- `background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...)`, use color transitions, otherwise known as gradients, on elements
  - gradient_direction specifies the direction of gradient in degrees
  - color 1, color 2, ... specifies the order of colors
  ```css
  background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
  ```
- `repeating-linear-gradient()`, very similar to linear-gradient() with the major difference that it repeats the specified gradient pattern
  ```css
  background: repeating-linear-gradient(
    90deg,
    yellow 0px,
    blue 40px,
    green 40px,
    red 80px
  );
  ```
  the gradient starts with the color yellow at 0 pixels which blends into the second color blue at 40 pixels away from the start. Since the next color stop is also at 40 pixels, the gradient immediately changes to the third color green, which itself blends into the fourth color value red as that is 80 pixels away from the beginning of the gradient.
- `background: url()`, link an image of the chosen texture or pattern

#### Animation

- `transform: scale()`, let you scale, move, rotate, skew, etc., your elements
  - scale(), scales up or down the element
  - skewX(), skews the selected element along its X (horizontal) axis by a given degree
  - rotate(), rotates
- `@keyframes` is how to specify exactly what happens within the animation over the duration
  ```css
  #anim {
    animation-name: colorful;
    animation-duration: 3s;
  }
  @keyframes colorful {
    0% {
      background-color: blue;
    }
    100% {
      background-color: yellow;
    }
  }
  ```
- there are 8 animation properties in total

  - `animation-name`, sets the name of the animation, which is later used by `@keyframes` to tell CSS which rules go with which animations
  - `animation-duration`, sets the length of time for the animation

  - `animation-fill-mode` specifies the style applied to an element when the animation has finished

  ```css
  animation-fill-mode: forwards;
  ```

  - `animation-iteration-count` allows you to control how many times you would like to loop through the animation

  ```css
  animation-iteration-count: 3;
  ```

  - `animation-timing-function` property controls how quickly an animated element changes over the duration of the animation

    - `ease` is the default timing function
    - `ease-out`, which is quick in the beginning then slows down
    - `ease-in`, which is slow in the beginning, then speeds up at the end
    - `linear`, which applies a constant animation speed throughout
    - `cubic-bezier` function consists of four main points that sit on this 1 by 1 grid: p0, p1, p2, and p3. p0 and p3 are set for you - they are the beginning and end points which are always located respectively at the origin (0, 0) and (1, 1). You set the x and y values for the other two points, and where you place them in the grid dictates the shape of the curve for the animation to follow. This is done in CSS by declaring the x and y values of the p1 and p2 "anchor" points in the form: (x1, y1, x2, y2). Pulling it all together, here's an example of a Bezier curve in CSS code:

    ```css
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
    ```

#### Pseudo selectors

- `::before` refers to the first child of the element
- `::after` refers to the last child of the element
