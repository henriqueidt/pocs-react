import { createFileRoute } from "@tanstack/react-router";

const allProducts = [
  { id: 1, name: "Laptop Pro", category: "electronics", price: 1299 },
  { id: 2, name: "Wireless Mouse", category: "electronics", price: 29 },
  { id: 3, name: "Running Shoes", category: "sports", price: 89 },
  { id: 4, name: "Yoga Mat", category: "sports", price: 35 },
  { id: 5, name: "Coffee Maker", category: "kitchen", price: 79 },
  { id: 6, name: "Blender", category: "kitchen", price: 49 },
];

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: (search.category as string) || "",
    q: (search.q as string) || "",
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { category, q } = Route.useSearch();

  const filtered = allProducts.filter((p) => {
    const matchCategory = category ? p.category === category : true;
    const matchQuery = q ? p.name.toLowerCase().includes(q.toLowerCase()) : true;
    return matchCategory && matchQuery;
  });

  return (
    <div>
      <h1>Products</h1>
      <p>
        Filters — category: <strong>{category || "all"}</strong>, query:{" "}
        <strong>{q || "none"}</strong>
      </p>
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>
            {p.name} ({p.category}) — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
