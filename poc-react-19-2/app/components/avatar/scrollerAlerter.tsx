import { useEffect, useEffectEvent } from "react";

type ScrollerAlerterProps = {
  name: string;
  count: number;
};

const ScrollerAlerter = ({ name, count }: ScrollerAlerterProps) => {
  const logCartChanged = useEffectEvent(() => {
    console.log(
      `Cart changed for ${name}, new count: ${count}. That will only trigger when count changes`
    );
  });

  useEffect(() => {
    logCartChanged();
  }, [count]);

  return (
    <div>
      <div>items in cart: {count}</div>
    </div>
  );
};
export default ScrollerAlerter;
