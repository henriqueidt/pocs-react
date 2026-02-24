import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$")({
  component: RouteComponent,
});

function RouteComponent() {
  const { _splat } = Route.useParams();
  return <div>Splat params: {_splat}</div>;
}
