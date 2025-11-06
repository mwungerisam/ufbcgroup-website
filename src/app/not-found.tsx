import Link from 'next/link';
import Navbar from './components/Navbar';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-primary-50 py-20 px-4">
      <Navbar />
      <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-2xl p-10 mt-12">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#1A237E" />
          <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="36" fontWeight="bold" dy=".3em">404</text>
        </svg>
        <h1 className="text-4xl font-extrabold text-primary mt-6 mb-2 text-center">Page Not Found</h1>
        <p className="text-lg text-gray-700 text-center mb-6 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <Link href="/" className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-blue-900 transition">Go to Homepage</Link>
      </div>
    </main>
  );
}
