import axios from 'axios';
import { Playlist } from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

async function fetchWithRetry<T>(
  url: string,
  retries = 3,
  delay = 500
): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await axios.get<T>(url);
      return res.data;
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, delay));
      delay *= 2; // exponential backoff
    }
  }
  throw new Error('Failed to fetch after retries');
}

export async function getPlaylists(): Promise<Playlist[]> {
  try {
    return await fetchWithRetry<Playlist[]>(`${API_BASE}/playlists`);
  } catch {
    // Mock fallback
    return [
      {
        id: '1',
        name: 'Chill Vibes',
        mood: 'Chill',
        description: 'Relax and unwind',
        tracks: ['track1', 'track2'],
      },
      {
        id: '2',
        name: 'Workout Pump',
        mood: 'Energetic',
        description: 'Get moving!',
        tracks: ['track3', 'track4'],
      },
    ];
  }
}
