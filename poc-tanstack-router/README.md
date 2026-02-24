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
