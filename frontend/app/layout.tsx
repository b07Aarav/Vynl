import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'VYNl - Music Mood Playlist',
  description: 'Curated playlists based on your mood',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-indigo-600 text-white p-4 text-xl font-bold">
          VYNl 🎵
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="bg-gray-200 p-4 text-center text-sm">
          © 2025 VYNl Inc.
        </footer>
      </body>
    </html>
  );
}
