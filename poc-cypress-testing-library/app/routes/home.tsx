import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to React Router!
        </h1>
        <p className="text-gray-600 mb-8">
          This is a simple React Router app with a todo list feature.
        </p>
        <Link 
          to="/todos" 
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Go to Todo List
        </Link>
      </div>
    </div>
  );
}
