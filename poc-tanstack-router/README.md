# POC TANSTACK ROUTER

## @tanstack/router-cli

- Auto generates the routeTree based on `/routes` file structure
- After adding a new route to `/routes` folder, simply run `tsr generate`, and tanstack will generate the route and types for it. Or just keep running `tsr watch` so it will automatically update on changes to `/routes`

## React Router vs Tanstack Router

| React Router   | Tantsack Router |
| -------------- | --------------- |
| Runtime Errors | Type Safety     |
| Untyped Params | Typed Params    |

## The Root Route

[\_\_root.tsx](src/routes/__root.tsx)

- Top level route that encapsulates all other routes
- The Root Route has no path
- It's component is always rendered

All the other routes after the root are configured with `createFileRoute`

## Basic Routes

Basic routes are routes that match a specific path and render their component

[about.tsx](src/routes/about.tsx)

## Index Routes

[posts/index.tsx](src/routes/posts/index.tsx)

Index routes are routes that will target their parent route when it's path is exactly matched and no child route is matched

## Dynamic Route Segments

[posts/$postId.tsx](src/routes/posts/$postId.tsx)

Dynamic route segments are routes in which part of the path is taken as a pathParam.

The dynamic path or pathParam is declared in the route with a `$` before its name and can be captured in the params properties

## Catch All Routes (Splat)

[posts/$.tsx](src/routes/posts/$.tsx)

A splat route will capture all the unknown path passed after the `$` inside the `_splat` pathParam

For example, when accessing `/posts/unknown-param/another-param/123`
The params on the splat route will be:

```JS
{
  _splat: "unknown-param/another-param/123"
}
```

## Optional Path Parameters

[books.{-$category}.tsx](src/routes/books.{-$category}.tsx)

Optional path params may or may not be present on the URL

In this case `category` is an optional parameter. Independant if it is passed or not, it will fall into the same route

## Layout Routes

[music.tsx](src/routes/music.tsx)

Layout routes let's us have a wrapper route that will render it as a container of all of it's child routes

In this case, both
`/music/list`
`/music/play`
will have the `music.tsx` layout as their wrapper

## Pathless Layout Routes

[\_pathless.tsx](src/routes/_pathless.tsx)

Pathless layout Routes work the same as Layout Routes, except they they aren't considered for the route path, it's just a wrapper that is added to all child routes

For example, when we can access `/songs` route, it will render `_pathless.songs.tsx` with `_pathless.tsx` as the wrapper
