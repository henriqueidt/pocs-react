import { createFileRoute } from "@tanstack/react-router";

const songs = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", year: 1975 },
  { id: 2, title: "Hotel California", artist: "Eagles", year: 1977 },
  { id: 3, title: "Stairway to Heaven", artist: "Led Zeppelin", year: 1971 },
  { id: 4, title: "Smells Like Teen Spirit", artist: "Nirvana", year: 1991 },
  { id: 5, title: "Imagine", artist: "John Lennon", year: 1971 },
];

export const Route = createFileRoute("/_pathless/songs")({
  component: SongsComponent,
});

function SongsComponent() {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          <strong>{song.title}</strong> — {song.artist} ({song.year})
        </li>
      ))}
    </ul>
  );
}
