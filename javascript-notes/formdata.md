# FormData()

_tree_

```
.
 |──index.html
 └──index.js

```

_index.html_

```html
<script src="./index.js" type="module"></script>

<form>
  <input name="name" />
  <input name="age" />
  <button>Submit</button>
</form>
```

_index.js_ (Method 1 - recommended for simple data)

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let data = {};
  data.name = e.target.name.value;
  data.age = e.target.age.value;
  console.log(data);
});
```

_index.js_ (Method 1 - recommended)

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let data = {};
  const formData = new FormData(e.target);

  for (const [key, value] of formData) {
    data[key] = value;
  }
  console.log(data);
});
```

_index.js_ (Method 2)

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let data = {};
  const formData = new FormData(e.target);

  const entries = formData.entries();
  while (true) {
    const entry = entries.next().value;
    if (!entry) break;

    const [key, value] = entry;
    data[key] = value;
  }
  console.log(data);
});
```

_index.js_ (Method 3)

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let data = {};

  Object.entries(form.children).forEach((child) => {
    data[child.name] = child.value;
  });
  console.log(data);
});
```

## Conclusion

Method 1 is the most recommended since it will work on all HTML structure. Method 2 is the same but with longer code. Method 3 although shorter in this example, will not work for all HTML structure (i.e. when there are `div`'s all over the place within your form fields, where you will have to modify the code to to get to the appropriate field)

# React Form data extraction methods

## Using Ref

```js
function AddBook() {
  const form = {};

  const submitHandler = (e) => {
    e.preventDefault();

    let data = {};
    Object.entries(form).forEach((entry) => {
      const [key, node] = entry;
      const value = node.value;
      data[key] = value;
    });
    console.log(data);

    addBook({ variables: data });
    // for (var key in data) {
    //   data[key] = ''
    // }
  };

  return (
    <form id="add-book" onSubmit={submitHandler}>
      <div className="field">
        <label>Book name:</label>
        <input ref={(n) => (form.name = n)} name="name" type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input ref={(n) => (form.genre = n)} name="genre" type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select ref={(n) => (form.authorId = n)} name="authorId">
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}
```
