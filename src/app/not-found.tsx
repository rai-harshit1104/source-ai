export default function NotFound() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="text-blue-500 hover:text-blue-700">
        Return Home
      </a>
    </div>
  );
} 