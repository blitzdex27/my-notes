# How web page load

## Navigation

- DNS lookup
- [TCP handshake](./tcp-handshake.md)
- TLS handshake

## Response

- TCP Slow Start / 14KB rule
- Congestion control

## Parsing (critical rendering path)

- Building DOM tree (HTML to object) (1st step)
- Preload scanner
- Buildingg CSSOM tree (CSS to object) (2nd step)
- Javascript Compilation (scripts are parsed into abstract syntax trees)
- Building Accessibility Tree

## Render (critical rendering path continued)

- Style (3rd step)
  - combines DOM and CSSOM into Render tree
- Layout (4th step)
  - determines the size and location of each nodes on the page based on the viewport size and specified dimension on style
  - reflow is the subusequent determination of size and location due to change in size/location of nodes, objects, or elements
- Painting (5th step / last)
  - paints every pixel needed on the screen
  - break downs elements into layers (as in photoshop)
- Composting
  - when sections on the screen are broken down into layers, overlapping each other
  - composting will be necessary to ensure they are drawn in the screen in the right order and content is rendered correctly
  - reflow sparks re-layout, repaint, and re-composite

## Interactivity

- if the load includes JavaScript that is correctly deferred, and only executed after the onload event fires,
- the page won't be responsive until the script has been executed completely
- Time to Interactive (TTI) is the measurement of how long from the time that the first request which led to DNS look up and SSL connection to when the page is interactive
