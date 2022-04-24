## express-jwt
```js
app.use("/", expressJWT({
  secret : app.get('secret'),
  getToken: function fromCookie (req) {
    var token = req.cookies.access_token || req.body.access_token || req.query.access_token || req.headers['x-access-token'] ;
    if (token) {
      return token;
    } 
    return null;
  }
}).unless({
    path:[
      '/',
      '/foo',
      '/login'
    ]}
));
```