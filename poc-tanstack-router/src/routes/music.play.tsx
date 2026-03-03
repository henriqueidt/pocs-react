import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/music/play")({
  component: RouteComponent,
});

function RouteComponent() {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <button onClick={() => setPlaying((prev) => !prev)}>
        {playing ? "⏸ Pause" : "▶ Play"}
      </button>
      {playing && <p>Playing</p>}
    </div>
  );
}
