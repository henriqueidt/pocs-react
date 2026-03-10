import { createFileRoute } from "@tanstack/react-router";
import Button from "./-components/button";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Please specify a post
      <Button label="click on me" onClick={() => {}} />
    </div>
  );
}
