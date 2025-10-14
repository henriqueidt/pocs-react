"use client";

import { use, useEffect, useState } from "react";

type Album = {
  userId: number;
  id: number;
  title: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchAlbums = async () => {
  console.log("Starting to fetch albums..."); // You'll see this only when component renders
  await sleep(5000);
  return fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
    res.json()
  );
};

let albumsPromise: Promise<Album[]> | null = null;

const Albums = () => {
  if (!albumsPromise) {
    albumsPromise = fetchAlbums();
  }

  const albums = use(albumsPromise);

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Albums component without Activity</h2>
      <ul>
        {albums?.slice(0, 5).map((album: Album) => (
          <li key={album.id}>
            <h3>{album.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
