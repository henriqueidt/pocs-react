import { useState } from "react";

const FormTest = () => {
  const [name, setName] = useState("");
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        className="border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
        id="name"
        name="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormTest;
