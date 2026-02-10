import { useState, useTransition } from "react";

async function updateTotal(value: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 30);
    }, 2000);
  });
}

export default function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    startTransition(async () => {
      const value = await updateTotal(newCount);
      // The pending state of a transition can be accessed by calling it again.
      // With that we can avoid rendering intermediate states
      startTransition(() => {
        setTotalValue(value);
      });
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-8 text-white">
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            useTransition
          </h1>
          <p className="mt-2 text-slate-400 text-sm">React Hook</p>
        </div>

        <ul className="space-y-3 border-l-2 border-purple-500/50 pl-4">
          <li className="text-slate-300">
            A hook that lets you update state without blocking the UI
          </li>
          <li className="text-slate-300">
            State being updated inside a{" "}
            <span className="font-semibold text-purple-300">transition</span> is
            considered low-priority and can be interrupted by more urgent state
            updates
          </li>
        </ul>

        <div className="rounded-lg bg-slate-800/60 border border-slate-700 p-4">
          <code className="text-sm text-pink-300">
            const [isPending, startTransition] = useTransition();
          </code>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg bg-slate-800/40 border border-slate-700/50 p-4">
            <p className="text-xs font-mono text-purple-400 mb-1">isPending</p>
            <p className="text-sm text-slate-300">
              A boolean telling if the transition is in progress
            </p>
          </div>
          <div className="rounded-lg bg-slate-800/40 border border-slate-700/50 p-4">
            <p className="text-xs font-mono text-purple-400 mb-1">
              startTransition
            </p>
            <p className="text-sm text-slate-300">
              Function to wrap around state updates that are non-urgent
            </p>
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed text-sm">
          useTransition is useful because React usually treats all state updates
          with the same priority, so heavy updates will freeze other updates.
          With transition, you can put those heavy updates as a non-urgent
          update and let others that provide user feedback to run first.
        </p>

        <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-6 flex flex-col items-center gap-5">
          <p className="text-sm text-slate-400 uppercase tracking-widest">
            Demo
          </p>
          <p
            className={`text-6xl font-bold tabular-nums transition-opacity duration-300 ${
              isPending ? "opacity-40" : "opacity-100"
            }`}
          >
            {count}
          </p>
          <p>value: ${totalValue}.00</p>
          <button
            type="button"
            onClick={handleClick}
            className="relative px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 disabled:cursor-not-allowed active:scale-95"
          >
            Increase counter
          </button>
        </div>
      </div>
    </main>
  );
}
