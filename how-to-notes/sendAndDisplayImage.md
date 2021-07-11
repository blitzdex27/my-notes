## [Server-server] How to fetch image / video / text / or any file from a server

**Server to fetch from**

Install dependencies:

> `npm install express`

Source code:

```JavaScript
const express = require('express')
const {createReadStream} = require('fs')
const app = express()

app.get('/get-file', (req, res) => {
    const filePath = '../data/myfile.jpg'
    const file = createReadStream(filePath)
    file.pipe(res)
})

app.listen(3000)
```

\*Note: If you encountered an error on the `filePath`, you can use `path.resolve()`. This is a sure way on directing a path.

```JavaScript
const express = require('express')
const {createReadStream} = require('fs')
const path = require('path')
const app = express()

app.get('/get-file', (req, res) => {
    const filePath = path.resolve(__dirname, '..', 'data', 'myfile.jpg')
    const file = createReadStream(filePath)
    file.pipe(res)
})

app.listen(3000)
```

**Server fetching**

Install dependencies:

> `npm install express node-fetch`

Source Code:

```JavaScript
const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.get('/fetch-file', async (req, res) => {

    const response = await fetch('http://localhost:3000/get-file')
    const blob = await response.blob()
    const stream = await blob.stream()

    stream.pipe(res)
})

app.listen(5000)
```

## [Server-client] How to fetch image / video / text / or any file from a server into client (HTML or React)

**Server to fetch from**

Install dependencies:

> `npm install express cors`

```JavaScript
const express = require('express')
const {createReadStream} = require('fs')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/get-file', (req, res) => {
    const filePath = path.resolve(__dirname, '..', 'data', 'myfile.jpg')
    const file = createReadStream(filePath)
    file.pipe(res)
})

app.listen(3000)
```

**Client (via HTML)**

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>My Client</title>
  </head>
  <body>
    <img alt="my image" />
  </body>
  <script>
    const fetchFile = async () => {
      const response = await fetch("http://localhost:3000/get-file");
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    };

    const displayImage = async () => {
      const image = document.querySelector("img");
      const imageURL = await fetchFile();
      image.setAttribute("src", imageURL);
    };

    displayImage();
  </script>
</html>
```

**Client (via React.js)**

```JavaScript
import React, {useState} from 'react'

function App() {

  const [screenshot, setScreenshot] = useState(null);

  const fetchImage = async () => {
      const response = await fetch("http://localhost:3000/get-file");
      const blob = await response.blob();
      setScreenshot(URL.createObjectURL(blob));
  };

  return (
    <div className="scn-shot">
      <button onClick={fetchImage}>Take Screenshot</button>
      <img className="image" src={screenshot} />
    </div>
  );
}
```
