import { use } from "react";

type Person = {
  id: number;
  name: string;
};

const data: Person[] = [
  { id: 1, name: "jon" },
  { id: 2, name: "john" },
  { id: 3, name: "maria" },
  { id: 4, name: "rob" },
];

const cache = new Map<string, Promise<Person[]>>();

function getData(query: string): Promise<Person[]> {
  if (!cache.has(query)) {
    cache.set(
      query,
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(data.filter((item) => item.name.includes(query)));
        }, 2000);
      })
    );
  }
  return cache.get(query)!;
}

export default function Search({ query }: { query: string }) {
  if (query === "") {
    return null;
  }
  const data = use(getData(query));
  if (data.length === 0) {
    return (
      <p>
        No matches for <i>"{query}"</i>
      </p>
    );
  }
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
