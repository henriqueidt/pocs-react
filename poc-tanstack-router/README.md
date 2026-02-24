# POC TANSTACK ROUTER

## @tanstack/router-cli

- Auto generates the routeTree based on `/routes` file structure
- After adding a new route to `/routes` folder, simply run `tsr generate`, and tanstack will generate the route and types for it. Or just keep running `tsr watch` so it will automatically update on changes to `/routes`

## React Router vs Tanstack Router
| React Router   | Tantsack Router |
|----------------|-----------------|
| Runtime Errors | Type Safety     |
| Untyped Params | Typed Params    |

## The Root Route

[__root.tsx](src/routes/__root.tsx)

- Top level route that encapsulates all other routes
- The Root Route has no path
- It's component is always rendered

All the other routes after the root are configured with `createFileRoute`

## Basic Routes

Basic routes are routes that match a specific path and render their component

[about.tsx](src/routes/about.tsx)

## Index Routes

Index routes are routes that will target their parent route when it's path is exactly matched and no child route is matched