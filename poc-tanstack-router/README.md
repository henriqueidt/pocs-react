# POC TANSTACK ROUTER

## @tanstack/router-cli

- Auto generates the routeTree based on `/routes` file structure

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

