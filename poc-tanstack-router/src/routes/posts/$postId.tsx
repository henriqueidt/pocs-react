import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
  component: PostsIndexComponent,
});

function PostsIndexComponent() {
  const { postId } = Route.useParams();

  return <div>Post id: {postId}</div>;
}
