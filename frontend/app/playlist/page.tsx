'use client';

import { useEffect, useState } from 'react';
import { getPlaylists } from '../../lib/api';
import { Playlist } from '../../lib/types';

export default function PlaylistPage() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPlaylists()
      .then(setPlaylists)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading playlists...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (playlists.length === 0) return <p>No playlists found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playlists.map((p) => (
        <div
          key={p.id}
          className="bg-white p-4 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="font-bold text-lg">{p.name}</h2>
          <p className="text-sm text-gray-500">{p.mood}</p>
          <p className="mt-2 text-gray-700">{p.description}</p>
        </div>
      ))}
    </div>
  );
}
