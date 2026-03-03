import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/music")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>MUSIC PAGES (this title will be present in all music child pages)</h1>
      <Outlet />
    </div>
  );
}
