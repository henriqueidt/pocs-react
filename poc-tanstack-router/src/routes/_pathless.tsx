import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathless")({
  component: PathlessComponent,
});

function PathlessComponent() {
  return (
    <div>
      <h1>
        PATHLESS LAYOUT (this wrapper is shared but there is no path for it)
      </h1>
      <Outlet />
    </div>
  );
}
