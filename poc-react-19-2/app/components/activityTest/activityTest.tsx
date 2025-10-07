import { Activity, useState } from "react";
import FormTest from "../formTest/formTest";

const ActivityTest = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Toggle visibility
      </button>
      <div className="my-16">
        <Activity mode={isVisible ? "visible" : "hidden"}>
          This form won't lose it's state when hidden, because of usage of
          Activity.
          <FormTest />
        </Activity>
      </div>
      {isVisible && (
        <>
          This form will loose it's state when hidden, as it is using
          conditional rendering
          <FormTest />
        </>
      )}
    </div>
  );
};

export default ActivityTest;
