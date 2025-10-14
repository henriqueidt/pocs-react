import { Activity, Suspense, useState } from "react";
import Posts from "../posts/posts";
import Albums from "../albums/albums";

const ActivityPreloadContent = () => {
  const [showPosts, setShowPosts] = useState(false);
  return (
    <div className="mt-10 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2>Activity Preload Content</h2>
      <p>
        The first component will fetch data in background even while not yet
        visible.
      </p>
      <p>
        The second component will only start fetching data after it becomes
        visible.
      </p>
      <button
        onClick={() => setShowPosts(!showPosts)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
      >
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>
      <Suspense fallback={<div>Loading first...</div>}>
        <Activity mode={showPosts ? "visible" : "hidden"}>
          <Posts />
        </Activity>
      </Suspense>
      <Suspense fallback={<div>Loading second...</div>}>
        {showPosts ? <Albums /> : null}
      </Suspense>
    </div>
  );
};

export default ActivityPreloadContent;
