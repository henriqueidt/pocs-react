import { useState } from "react";
import ScrollerAlerter from "~/components/avatar/scrollerAlerter";

export default function UseEffectEvent() {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl font-bold">useEffectEvent</h1>
      <label htmlFor="input">Type your name:</label>
      <input
        type="text"
        id="input"
        className="border border-gray-300 rounded-md p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => setCount((c) => c + 1)}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add to cart
      </button>
      <ScrollerAlerter name={name} count={count} />
    </div>
  );
}
