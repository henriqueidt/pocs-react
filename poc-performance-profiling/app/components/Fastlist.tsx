import { memo } from "react";

const FastList = memo(function FastList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col h-40 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded p-2 w-full">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
});

export default FastList;
