import { memo, Profiler, useCallback, useState } from "react";
import type { ProfilerOnRenderCallback } from "react";

interface RenderEntry {
  phase: "mount" | "update" | "nested-update";
  actualDuration: number;
  baseDuration: number;
}

interface ProfilerPanelProps {
  id: string;
  children: React.ReactNode;
}

const ProfilerContainer = memo(function ProfilerContainer({
  id,
  onRender,
  children,
}: {
  id: string;
  onRender: ProfilerOnRenderCallback;
  children: React.ReactNode;
}) {
  return (
    <Profiler id={id} onRender={onRender}>
      {children}
    </Profiler>
  );
});

export function ProfilerPanel({ id, children }: ProfilerPanelProps) {
  const [entries, setEntries] = useState<RenderEntry[]>([]);

  const onRender = useCallback<ProfilerOnRenderCallback>(
    (_, phase, actualDuration, baseDuration) => {
      setEntries((prev) => [{ phase, actualDuration, baseDuration }, ...prev]);
    },
    [],
  );

  return (
    <div className="flex flex-col gap-4">
      <ProfilerContainer id={id} onRender={onRender}>
        {children}
      </ProfilerContainer>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-200">
          Profiler: {id}
        </div>

        {entries.length === 0 ? (
          <p className="px-4 py-3 text-gray-400 italic">No renders yet.</p>
        ) : (
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100 dark:border-gray-700">
                <th className="px-4 py-2">Phase</th>
                <th className="px-4 py-2">Actual (ms)</th>
                <th className="px-4 py-2">Base (ms)</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-50 dark:border-gray-800 last:border-0"
                >
                  <td className="px-4 py-2">{entry.phase}</td>
                  <td className="px-4 py-2 font-mono">
                    {entry.actualDuration.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 font-mono">
                    {entry.baseDuration.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
