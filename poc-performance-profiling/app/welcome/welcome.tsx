import { ProfilerPanel } from "~/components/ProfilerPanel";
import SlowList from "~/components/SlowList";
import FastList from "~/components/Fastlist";
import { useMemo, useState } from "react";

export function Welcome() {
  const [count, setCount] = useState(0);
  const items = useMemo(
    () => Array.from({ length: 500 }, (_, i) => `Item ${i}`),
    []
  );

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0">
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium"
          >
            Re-render parent ({count})
          </button>
        </div>

        <div className="flex items-start gap-16 w-full">
          <ProfilerPanel id="Slowlist">
            <SlowList items={items} />
          </ProfilerPanel>

          <ProfilerPanel id="Fastlist">
            <FastList items={items} />
          </ProfilerPanel>
        </div>
      </div>
    </main>
  );
}
