import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto text-center mt-20">
      <h1 className="text-4xl font-bold mb-6">Welcome to VYNl</h1>
      <p className="mb-6">Discover playlists tailored to your mood.</p>
      <Link
        href="/playlist"
        className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
      >
        Explore Playlists
      </Link>
    </div>
  );
}
