const SlowList = ({ items }: { items: string[] }) => {
  return (
    <ul className="flex ">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default SlowList;
