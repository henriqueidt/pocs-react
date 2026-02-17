import { Suspense, useDeferredValue, useState } from "react";
import Search from "~/components/search";

export default function UseDeferredValue() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">useDeferredValue</h1>
      <p>It can be used to defer(delay) some value.</p>
      <p>
        When used, react will delay to rerender with the new value and will
        render the old value while it is being updated
      </p>

      <label>
        Search people:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Search query={deferredQuery} />
      </Suspense>
    </main>
  );
}
