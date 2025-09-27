import type { Route } from "./+types/todos";
import { Link } from "react-router";
import { TodoList } from "../components/TodoList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo List - React Router App" },
    { name: "description", content: "A simple todo list app with React Router!" },
  ];
}

export default function Todos() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
      <TodoList />
    </div>
  );
}