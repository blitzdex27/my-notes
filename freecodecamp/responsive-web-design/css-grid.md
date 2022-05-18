# CSS Grid

- `display: grid` turns any element into a grid container
  - _container_ is referred to parent element
  - _items_ are referred to child elements
- `grid-template-columns` adds some columns to the grid
  - The number of parameters given to the grid-template-columns property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.
  ```css
  .container {
    display: grid;
    grid-template-columns: 50px 50px;
  }
  ```
- `grid-template-rows` adds rows to the grid with specified size
- Use CSS Grid units to Change the Size of Columns and Rows

  - You can use absolute and relative units like `px` and `em` in CSS Grid to define the size of rows and columns. You can use these as well:

    - `fr`: sets the column or row to a fraction of the available space,

    - `auto`: sets the column or row to the width or height of its content automatically,

    - `%`: adjusts the column or row to the percent width of its container.

    ```css
    grid-template-columns: auto 50px 10% 2fr 1fr;
    ```

    This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.

- `grid-column-gap: 10px` adds a gap between columns
- `grid-row-gap: 10px` adds a gap between rows
- `grid-gap: 10px 10px` shorthand `grid-column-gap` and `grid-row-gap`

  - 1 value: creates a gap between both row and columns
  - 2 values: `grid-gap: row-gap column-gap`

- `grid-column` controls spacing (used on grid items); controls the number of columns an item will consume

  - The hypothetical horizontal and vertical lines that create the grid are referred to as lines
  - These lines are numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upward

- `grid-row` controls the rows the item will consume
- `justify-self` aligns item horizontally
  - `stretch` is the default value
  - `start` aligns the content to the left
  - `center` aligns the content to the center
  - `end` aligns the content to the right
- `align-self` aligns self (item) vertically
- `justify-items` property aligns all items horizontally
- `align-items` property aligns all items vertically

- `grid-template-area` group cells of your grid together into an _area_ and give the area a custom name

  - The code below groups the cells of the grid into four areas; header, advert, content, and footer. Every word represents a cell and every pair of quotation marks represent a row.

    ```css
    .container {
      grid-template-areas:
        'header header header'
        'advert content content'
        'advert footer footer';
    }
    ```

  - `grid-area: header` places an item in your custom area by referencing the name you gave it
    ```css
    .item1 {
      grid-area: header;
    }
    ```
  - If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:
    ```css
    item1 {
      grid-area: 1/1/2/4;
    }
    ```
  - `grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;`

- Reduce Repetition Using the `repeat` Function
  ```css
  grid-template-rows: repeat(100, 50px);
  grid-template-columns: repeat(2, 1fr 50px) 20px;
  ```
- Limit Item Size Using the `minmax` Function

  - `minmax()` function is used to limit the size of items when the grid container changes size
    ```css
    grid-template-columns: 100px minmax(50px, 200px);
    ```
  - In the code above, grid-template-columns is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px

- Create Flexible Layouts Using `auto-fill`

  - The repeat function comes with an option called auto-fill. This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining auto-fill with minmax, like this:
    ```css
    repeat(auto-fill, minmax(60px, 1fr));
    ```
  - When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one. Note: If your container can't fit all your items on one row, it will move them down to a new one.

- Create Flexible Layouts Using `auto-fit`

  - `auto-fit` works almost identically to `auto-fill`
  - The only difference is that when the container's size exceeds the size of all the items combined, auto-fill keeps inserting empty rows or columns and pushes your items to the side, while auto-fit collapses those empty rows or columns and stretches your items to fit the size of the container.
  - Note: If your container can't fit all your items on one row, it will move them down to a new one.

- Use Media Queries to Create Responsive Layouts
  - CSS Grid can be an easy way to make your site more responsive by using media queries to rearrange grid areas, change dimensions of a grid, and rearrange the placement of items.
- Create Grids within Grids

  - Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.

- `box-sizing: border-box;`
  - makes the grid container be prevented from overlapping the viewport width/height whenever we add padding/margin
