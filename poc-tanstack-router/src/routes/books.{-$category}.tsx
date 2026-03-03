import { createFileRoute } from "@tanstack/react-router";

const books = [
  { title: "The Hobbit", category: "fantasy" },
  { title: "Dune", category: "sci-fi" },
  { title: "1984", category: "dystopia" },
  { title: "The Name of the Wind", category: "fantasy" },
  { title: "Neuromancer", category: "sci-fi" },
  { title: "Brave New World", category: "dystopia" },
];

export const Route = createFileRoute("/books/{-$category}")({
  component: PostsComponent,
});

function PostsComponent() {
  const { category } = Route.useParams();

  const filtered = category
    ? books.filter((b) => b.category === category)
    : books;

  return (
    <div>
      <h1>{category ? `Books in ${category}` : "All Books"}</h1>
      <ul>
        {filtered.map((b) => (
          <li key={b.title}>{b.title}</li>
        ))}
      </ul>
    </div>
  );
}
