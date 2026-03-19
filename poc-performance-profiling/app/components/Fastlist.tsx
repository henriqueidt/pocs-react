import { memo } from "react";

const FastList = memo(function FastList({ items }: { items: string[] }) {
  return (
    <ul className="flex ">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
});

export default FastList;
