import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/music_/$musicId/edit")({
  component: EditMusicComponent,
});

function EditMusicComponent() {
  const { musicId } = Route.useParams();
  const [title, setTitle] = useState(`Post ${musicId}`);
  const [description, setDescription] = useState();

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    alert(`Saved: "${title}"`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post {musicId}</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
