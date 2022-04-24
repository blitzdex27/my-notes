# Useful Commands

## `res.locals.variable`

> `res.locals` An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to `app.locals`.
>
> This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.
>
> Source: http://expressjs.com/en/api.html#res.locals

```js
res.locals.user = user;
```
