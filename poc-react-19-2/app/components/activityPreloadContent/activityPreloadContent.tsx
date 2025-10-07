import { Activity, Suspense, useState } from "react";
import Posts from "../posts/posts";

const ActivityPreloadContent = () => {
  const [showPosts, setShowPosts] = useState(false);
  return (
    <div>
      <h2>Activity Preload Content</h2>
      <p>This is the activity preload content component.</p>
      <button
        onClick={() => setShowPosts(!showPosts)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
      >
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <Activity mode={showPosts ? "visible" : "hidden"}>
          <Posts />
        </Activity>
      </Suspense>
    </div>
  );
};

export default ActivityPreloadContent;
