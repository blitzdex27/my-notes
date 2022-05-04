# Applied accessibility

- Add a text alternative to images for visually impaired accessibility
  - `alt` text describes the image's content and provides a text-alternative for it
  - `alt` attribute helps in cases where the image fails to load or can't be seen by a user
  - search engines also use it to understand what an image contains to include it in search results
  - including an alt attribute when using img tags is mandatory
  - good alt text provides the reader a brief description of the image
  ```html
  <img src="importantLogo.jpeg" alt="Company logo" />
  ```
- Know When Alt Text Should be Left Blank

  - sometimes images are grouped with a caption already describing them, or are used for decoration only. In these cases, alt text may seem redundant or unnecessary
  - when an image is already explained with text content or does not add meaning to a page, the img still needs an alt attribute, but it can be set to an empty string
  - Note: For images with a caption, you may still want to include alt text since it helps search engines catalog the image's content

  ```html
  <img src="visualDecoration.jpeg" alt="" />
  ```

- Use Headings (`h1` through `h6` elements) to Show Hierarchical Relationships of Content

  - screen readers can be set to read only the headings on a page so the user gets a summary
  - it is important for the heading tags in your markup to have semantic meaning and relate to each other, not be picked merely for their size values
  - **_Semantic meaning_** means that the tag you use around content indicates the type of information it contains
  - each page should always have one (and only one) h1 element, which is the main subject of your content

- Jump Straight to the Content Using the `main` Element

  - HTML5 introduced several new elements that give developers more options while also incorporating accessibility features. These tags include `main`, `header`, `footer`, `nav`, `article`, and `section`, among others
  - By default, a browser renders these elements similar to the humble div. However, using them where appropriate gives additional meaning to your markup.
  - The tag name alone can indicate the type of information it contains, which adds semantic meaning to that content.
  - Assistive technologies can access this information to provide better page summary or navigation options to their users.
  - The `main` element is used to wrap (you guessed it) the main content, and there should be only one per page. It's meant to surround the information related to your page's central topic. It's not meant to include items that repeat across pages, like navigation links or banners.
  - The main tag also has an embedded landmark feature that assistive technology can use to navigate to the main content quickly. If you've ever seen a "Jump to Main Content" link at the top of a page, using the main tag automatically gives assistive devices that functionality.

- Wrap Content in the `article` Element

  - `article` is a sectioning element and is used to wrap independent, self-contained content
  - The tag works well with blog entries, forum posts, or news articles.
  - Determining whether content can stand alone is usually a judgment call, but you can use a couple of simple tests. Ask yourself if you removed all surrounding context, would that content still make sense? Similarly, for text, would the content hold up if it were in an RSS feed?
  - Remember that folks using assistive technologies rely on organized, semantically meaningful markup to better understand your work.
  - Note: The `section` element is also new with HTML5, and has a slightly different semantic meaning than `article`. An `article` is for standalone content, and a `section` is for grouping thematically related content. They can be used within each other, as needed. For example, if a book is the article, then each chapter is a `section`. When there's no relationship between groups of content, then use a `div`.
  - `<div>` - groups content `<section>` - groups related content `<article>` - groups independent, self-contained content

- Make Screen Reader Navigation Easier with the `header` Landmark

  - `header` tag is used to wrap introductory information or navigation links for its parent tag and works well around content that's repeated at the top on multiple pages.

- Make Screen Reader Navigation Easier with the `nav` Landmark

  - `nav` tag is meant to wrap around the main navigation links in your page
  - If there are repeated site links at the bottom of the page, it isn't necessary to markup those with a nav tag as well. Using a footer (covered in the next challenge) is sufficient

- Make Screen Reader Navigation Easier with the footer Landmark

  - `footer` is primarily used to contain copyright information or links to related documents that usually sit at the bottom of a page.

- Improve Accessibility of Audio Content with the `audio` Element

  - Audio content also needs a text alternative to be accessible to people who are deaf or hard of hearing. This can be done with nearby text on the page or a link to a transcript.
  - `audio` tag supports the `controls` attribute. This shows the browser default play, pause, and other controls, and supports keyboard functionality

  ```html
  <audio id="meowClip" controls>
    <source src="audio/meow.mp3" type="audio/mpeg" />
    <source src="audio/meow.ogg" type="audio/ogg" />
  </audio>
  ```

  - **Note**: Multimedia content usually has both visual and auditory components. It needs synchronized captions and a transcript so users with visual and/or auditory impairments can access it. Generally, a web developer is not responsible for creating the captions or transcript, but needs to know to include them.

- Improve Chart Accessibility with the `figure` and `figcaption` Element

  - Used together, these items wrap a visual representation (like an image, diagram, or chart) along with its caption.
  - Wrapping these elements together gives a two-fold accessibility boost by semantically grouping related content and providing a text alternative explaining the `figure`.
  - For data visualizations like charts, the caption can be used to briefly note the trends or conclusions for users with visual impairments. Another challenge covers how to move a table version of the chart's data off-screen (using CSS) for screen reader users.
    ```html
    <figure>
      <img
        src="roundhouseDestruction.jpeg"
        alt="Photo of Camper Cat executing a roundhouse kick"
      />
      <br />
      <figcaption>
        Master Camper Cat demonstrates proper form of a roundhouse kick.
      </figcaption>
    </figure>
    ```

- Improve Form Field Accessibility with the `label` Element

  - `label` tag wraps the text for a specific form control item, usually the name or label for a choice
  - this ties meaning to the item and makes the form more readable
  - `for` attribute on a label tag explicitly associates that `label` with the form control and is used by screen readers.
  - The value of the for attribute must be the same as the value of the id attribute of the form control

  ```html
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
  </form>
  ```

- Wrap Radio Buttons in a `fieldset` Element for Better Accessibility

  - Since radio buttons often come in a group where the user must choose one, there's a way to semantically show the choices are part of a set
  - `fieldset` tag surrounds the entire grouping of radio buttons to achieve this. It often uses a `legend` tag to provide a description for the grouping, which screen readers read for each choice in the `fieldset` element.
  - The `fieldset` wrapper and `legend` tag are not necessary when the choices are self-explanatory, like a gender selection. Using a label with the for attribute for each radio button is sufficient.

  ```html
  <form>
    <fieldset>
      <legend>Choose one of these three items:</legend>
      <input id="one" type="radio" name="items" value="one" />
      <label for="one">Choice One</label><br />
      <input id="two" type="radio" name="items" value="two" />
      <label for="two">Choice Two</label><br />
      <input id="three" type="radio" name="items" value="three" />
      <label for="three">Choice Three</label>
    </fieldset>
  </form>
  ```

- Add an Accessible Date Picker

  - Depending on browser support, a date picker shows up in the input field when it's in focus, which makes filling in a form easier for all users.
  - For older browsers, the type will default to text, so it helps to show users the expected date format in the label or placeholder text just in case.

  ```html
  <label for="input1">Enter a date:</label>
  <input type="date" id="input1" name="input1" placeholder="(dd/mm/yyyy)" />
  ```

- Standardize Times with the HTML5 datetime Attribute

  - HTML5 also introduced the time element along with a datetime attribute to standardize times
  - `time` element is an inline element that can wrap a date or time on a page
  - `datetime` attribute holds a valid format of that date
  - This is the value accessed by assistive devices. It helps avoid confusion by stating a standardized version of a time, even if it's informally or colloquially written in the text.
    ```html
    <p>
      Master Camper Cat officiated the cage match between Goro and Scorpion
      <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.
    </p>
    ```

- Make Elements Only Visible to a Screen Reader by Using Custom CSS

  - CSS's magic can also improve accessibility on your page when you want to visually hide content meant only for screen readers
  - This happens when information is in a visual format (like a chart), but screen reader users need an alternative presentation (like a table) to access the data
  - CSS is used to position the screen reader-only elements off the visual area of the browser window.

  ```css
  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
  ```

  - Note: The following CSS approaches will NOT do the same thing:

    - `display: none;` or `visibility: hidden;` hides content for everyone, including screen reader users
    - Zero values for pixel sizes, such as `width: 0px;` `height: 0px;` removes that element from the flow of your document, meaning screen readers will ignore it

- Improve Readability with High Contrast Text

  - Low contrast between the foreground and background colors can make text difficult to read. Sufficient contrast improves your content's readability, but what exactly does "sufficient" mean?
  - The Web Content Accessibility Guidelines (WCAG) recommend at least a 4.5 to 1 contrast ratio for normal text. The ratio is calculated by comparing the relative luminance values of two colors. This ranges from 1:1 for the same color, or no contrast, to 21:1 for white against black, the most substantial contrast. There are many contrast checking tools available online that calculate this ratio for you.

- Avoid Colorblindness Issues by Using Sufficient Contrast

  - Color is a large part of visual design, but its use introduces two accessibility issues.
    - First, color alone should not be used as the only way to convey important information because screen reader users won't see it
    - Second, foreground and background colors need sufficient contrast so colorblind users can distinguish them

- Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information

  - There are various forms of colorblindness. These can range from a reduced sensitivity to a certain wavelength of light to the inability to see color at all. The most common form is a reduced sensitivity to detect greens.
  - For example, if two similar green colors are the foreground and background color of your content, a colorblind user may not be able to distinguish them. Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information.
  - Note: Some online color picking tools include visual simulations of how colors appear for different types of colorblindness. These are great resources in addition to online contrast checking calculators.

- Give Links Meaning by Using Descriptive Link Text

  - Screen reader users have various options for what type of content their device reads. These options include skipping to (or over) landmark elements, jumping to the main content, or getting a page summary from the headings. Another option is to only hear the links available on a page.
  - Screen readers do this by reading the link text, or what's between the anchor (`a`) tags.
  - Having a list of "click here" or "read more" links isn't helpful. Instead, use brief but descriptive text within the `a` tags to provide more meaning for these users.

- Make Links Navigable with HTML Access Keys

  - HTML offers the `accesskey` attribute to specify a shortcut key to activate or bring focus to an element
  - Adding an `accesskey` attribute can make navigation more efficient for keyboard-only users
  - HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones
  - This includes links, buttons, and form controls

  ```html
  <button accesskey="b">Important Button</button>
  ```

- Use `tabindex` to Add Keyboard Focus to an Element

  - The HTML tabindex attribute has three distinct functions relating to an element's keyboard focus. When it's on a tag, it indicates that the element can be focused on. The value (an integer that's positive, negative, or zero) determines the behavior.
  - Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page. It's in the same order as the elements come in the HTML source markup. This same functionality can be given to other elements, such as div, span, and p, by placing a tabindex="0" attribute on them

  ```html
  <div tabindex="0">I need keyboard focus!</div>
  ```

  - Note: A negative tabindex value (typically -1) indicates that an element is focusable, but is not reachable by the keyboard.

- Use `tabindex` to Specify the Order of Keyboard Focus for Several Elements
  - The `tabindex` attribute also specifies the exact tab order of elements. This is achieved when the attribute's value is set to a positive number of 1 or higher.
  - Setting a `tabindex="1"` will bring keyboard focus to that element first. Then it cycles through the sequence of specified tabindex values (2, 3, etc.), before moving to default and `tabindex="0"` items
  - It's important to note that when the tab order is set this way, it overrides the default order (which uses the HTML source). This may confuse users who are expecting to start navigation from the top of the page. This technique may be necessary in some circumstances, but in terms of accessibility, take care before applying it.
  ```html
  <div tabindex="1">I get keyboard focus, and I get it first!</div>
  <div tabindex="2">I get keyboard focus, and I get it second!</div>
  ```
